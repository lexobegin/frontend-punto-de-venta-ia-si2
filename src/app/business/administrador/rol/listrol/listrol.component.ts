import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listrol',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listrol.component.html',
  styleUrl: './listrol.component.css',
})
export class ListrolComponent {
  // Datos ficticios de roles con permisos
  roles: any[] = [
    {
      id: 1,
      nombre: 'Administrador',
      permisos: [
        { id: 1, nombre: 'Gestionar Usuarios' },
        { id: 2, nombre: 'Gestionar Roles' },
        { id: 3, nombre: 'Ver Reportes' },
      ],
    },
    {
      id: 2,
      nombre: 'Usuario',
      permisos: [
        { id: 4, nombre: 'Ver Productos' },
        { id: 5, nombre: 'Hacer Pedidos' },
      ],
    },
    {
      id: 3,
      nombre: 'Moderador',
      permisos: [
        { id: 6, nombre: 'Aprobar Comentarios' },
        { id: 7, nombre: 'Borrar Comentarios' },
      ],
    },
  ];

  constructor(private readonly router: Router) {}

  editarRol(rol: any) {
    this.router.navigate(['/rol/edit', rol.id]);
    console.log('Editar', rol);
  }

  eliminarRol(id: number) {
    console.log('Eliminar', id);
  }
}
