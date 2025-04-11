import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listpermiso',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listpermiso.component.html',
  styleUrl: './listpermiso.component.css',
})
export class ListpermisoComponent {
  //Prueba
  permisos = [
    { id: 1, nombre: 'Ver Productos' },
    { id: 2, nombre: 'Editar Usuarios' },
    { id: 3, nombre: 'Gestionar Ventas' },
  ];

  constructor(private readonly router: Router) {}

  editarPermiso(permiso: any) {
    this.router.navigate(['/permiso/edit', permiso.id]);
    console.log('Editar', permiso);
  }

  eliminarPermiso(id: number) {
    console.log('Eliminar', id);
  }
}
