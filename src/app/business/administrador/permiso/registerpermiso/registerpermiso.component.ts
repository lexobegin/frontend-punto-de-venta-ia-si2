import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpermiso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registerpermiso.component.html',
  styleUrl: './registerpermiso.component.css',
})
export class RegisterpermisoComponent {
  // Este objeto será usado en el formulario
  permiso = {
    nombre: '',
  };

  constructor(private readonly router: Router) {}

  crearPermiso() {
    // Aquí iría tu lógica para enviar los datos al backend (por ahora solo mostramos por consola)
    console.log('Permiso creado:', this.permiso);

    // Limpiar el formulario (opcional)
    this.permiso.nombre = '';
  }

  cerrarModal() {
    // Aquí puedes poner la lógica para cerrar el modal (si estás usando uno)
    this.router.navigate(['/permisos']);
    console.log('Modal cerrado');
  }
}
