import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerrol',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registerrol.component.html',
  styleUrl: './registerrol.component.css',
})
export class RegisterrolComponent {
  // Datos de ejemplo para los permisos
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

  ngOnInit(): void {
    // Si estás editando un rol, puedes cargar los datos de un rol existente
    // Aquí puedes cargar los datos desde un servicio si fuera necesario
    // Para esta demostración, dejamos el nombre del rol vacío para la creación de un nuevo rol
  }

  // Método para crear el rol
  crearRol2(): void {
    console.log('Rol creado:', this.rol);
    console.log(
      'Permisos seleccionados:',
      this.permisos.filter((p) => p.seleccionado)
    );
  }
  crearRol() {
    const permisosSeleccionados = this.permisos
      .filter((p) => p.seleccionado)
      .map((p) => p.id);

    const rolData = {
      nombre: this.rol.nombre,
      permisos: permisosSeleccionados,
    };
  }
  cerrarModal() {
    // Aquí puedes poner la lógica para cerrar el modal (si estás usando uno)
    this.router.navigate(['/roles']);
    console.log('Modal cerrado');
  }
}
