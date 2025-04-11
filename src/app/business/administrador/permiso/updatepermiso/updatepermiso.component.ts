import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatepermiso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './updatepermiso.component.html',
  styleUrl: './updatepermiso.component.css',
})
export class UpdatepermisoComponent {
  // Este input puede recibir datos del componente padre (opcional si ya tienes algo implementado así)
  @Input() permiso = {
    id: 0,
    nombre: '',
  };

  constructor(private readonly router: Router) {}

  actualizarPermiso() {
    // Aquí va tu lógica para actualizar el permiso, por ahora solo mostramos por consola
    console.log('Permiso actualizado:', this.permiso);

    // Podrías cerrar el modal o limpiar si lo deseas
  }

  cerrarModal() {
    // Aquí puedes poner la lógica para cerrar el modal (si estás usando uno)
    this.router.navigate(['/permisos']);
    console.log('Modal cerrado');
  }
}
