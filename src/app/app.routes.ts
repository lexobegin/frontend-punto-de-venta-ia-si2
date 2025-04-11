import { Routes } from '@angular/router';

import { LayoutComponent } from './shared/components/layout/layout.component';
import { DashboardComponent } from './business/dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './business/authentication/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
//ADMIN
//permiso
import { ListpermisoComponent } from './business/administrador/permiso/listpermiso/listpermiso.component';
import { RegisterpermisoComponent } from './business/administrador/permiso/registerpermiso/registerpermiso.component';
import { UpdatepermisoComponent } from './business/administrador/permiso/updatepermiso/updatepermiso.component';
//rol
import { ListrolComponent } from './business/administrador/rol/listrol/listrol.component';
import { RegisterrolComponent } from './business/administrador/rol/registerrol/registerrol.component';
import { UpdaterolComponent } from './business/administrador/rol/updaterol/updaterol.component';
//usuario
import { ListusuarioComponent } from './business/administrador/usuario/listusuario/listusuario.component';
import { RegisterusuarioComponent } from './business/administrador/usuario/registerusuario/registerusuario.component';
import { UpdateusuarioComponent } from './business/administrador/usuario/updateusuario/updateusuario.component';
//empleado
import { ListempleadoComponent } from './business/administrador/empleado/listempleado/listempleado.component';
import { RegisterempleadoComponent } from './business/administrador/empleado/registerempleado/registerempleado.component';
import { UpdateempleadoComponent } from './business/administrador/empleado/updateempleado/updateempleado.component';
//categoria (producto)
import { ListcategoriaComponent } from './business/administrador/categoria/listcategoria/listcategoria.component';
import { RegistercategoriaComponent } from './business/administrador/categoria/registercategoria/registercategoria.component';
import { UpdatecategoriaComponent } from './business/administrador/categoria/updatecategoria/updatecategoria.component';
//VENTAS
//producto
import { ListproductoComponent } from './business/ventas/producto/listproducto/listproducto.component';
import { RegisterproductoComponent } from './business/ventas/producto/registerproducto/registerproducto.component';
import { UpdateproductoComponent } from './business/ventas/producto/updateproducto/updateproducto.component';
//cliente
import { ListclienteComponent } from './business/ventas/cliente/listcliente/listcliente.component';
import { RegisterclienteComponent } from './business/ventas/cliente/registercliente/registercliente.component';
import { UpdateclienteComponent } from './business/ventas/cliente/updatecliente/updatecliente.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'header',
        component: HeaderComponent,
        canActivate: [AuthGuard],
      },
      //ADMIN
      //permiso
      {
        path: 'permisos',
        component: ListpermisoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'permiso/create',
        component: RegisterpermisoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'permiso/edit/:id',
        component: UpdatepermisoComponent,
        canActivate: [AuthGuard],
      },
      //rol
      {
        path: 'roles',
        component: ListrolComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'rol/create',
        component: RegisterrolComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'rol/edit/:id',
        component: UpdaterolComponent,
        canActivate: [AuthGuard],
      },
      //usuario
      {
        path: 'usuarios',
        component: ListusuarioComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'usuario/create',
        component: RegisterusuarioComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'usuario/update',
        component: UpdateusuarioComponent,
        canActivate: [AuthGuard],
      },
      //empleado
      {
        path: 'empleados',
        component: ListempleadoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'empleado/create',
        component: RegisterempleadoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'empleado/update',
        component: UpdateempleadoComponent,
        canActivate: [AuthGuard],
      },
      //categoria
      {
        path: 'categorias',
        component: ListcategoriaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'categoria/create',
        component: RegistercategoriaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'categoria/update',
        component: UpdatecategoriaComponent,
        canActivate: [AuthGuard],
      },
      //VENTAS
      //producto
      {
        path: 'productos',
        component: ListproductoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'producto/create',
        component: RegisterproductoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'producto/update',
        component: UpdateproductoComponent,
        canActivate: [AuthGuard],
      },
      //cliente
      {
        path: 'clientes',
        component: ListclienteComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'cliente/create',
        component: RegisterclienteComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'cliente/update',
        component: UpdateclienteComponent,
        canActivate: [AuthGuard],
      },
      /** */
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
