import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updaterol',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './updaterol.component.html',
  styleUrl: './updaterol.component.css',
})
export class UpdaterolComponent {
  permisos: any[] = [
    { id: 1, nombre: 'Gestionar Usuarios', seleccionado: false },
    { id: 2, nombre: 'Gestionar Roles', seleccionado: false },
    { id: 3, nombre: 'Ver Reportes', seleccionado: false },
    { id: 4, nombre: 'Ver Productos', seleccionado: false },
    { id: 5, nombre: 'Hacer Pedidos', seleccionado: false },
  ];
  // Datos del rol
  rol: any = {
    nombre: '', // Nombre del rol que se ingresará en el formulario
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  cargarRol(id: number) {}

  actualizarRol() {
    console.log('actualizarRol');
  }
  cerrarModal() {
    // Aquí puedes poner la lógica para cerrar el modal (si estás usando uno)
    this.router.navigate(['/roles']);
    console.log('Modal cerrado');
  }
}
