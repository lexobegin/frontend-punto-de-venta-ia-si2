import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //private BASE_URL = 'http://127.0.0.1:8080';
  private BASE_URL = 'http://127.0.0.1:8000';
  private tokenKey = 'authToken';

  //private REFRESH_URL = 'http://127.0.0.1:8080/auth/refresh';
  private REFRESH_URL = 'http://127.0.0.1:8000/api/auth/jwt/refresh/';
  private refreshTokenKey = 'refreshToken';

  private rol = 'role';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/api/auth/jwt/create/`;
    return this.httpClient.post<any>(url, { email, password }).pipe(
      tap((response) => {
        if (response.access) {
          console.log('RESPONSE', response);

          this.setToken(response.access);

          this.setRefreshToken(response.refresh);
          this.autoRefreshToken();
        }
      })
    );
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    } else {
      return null;
    }
  }

  private setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshTokenKey, token);
  }

  private getRefreshToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.refreshTokenKey);
    } else {
      return null;
    }
  }

  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    return this.httpClient.post<any>(this.REFRESH_URL, { refreshToken }).pipe(
      tap((response) => {
        if (response.token) {
          console.log(response.token);
          this.setToken(response.token);
          this.setRefreshToken(response.refreshToken);
          this.autoRefreshToken();
        }
      })
    );
  }

  autoRefreshToken(): void {
    const token = this.getToken();
    if (!token) {
      return;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;

    const timeout = exp - Date.now() - 60 * 1000;

    setTimeout(() => {
      this.refreshToken().subscribe();
    }, timeout);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    //ORIGINAL

    const token = this.getToken();
    if (!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }
}
