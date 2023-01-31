import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoCreateComponent } from './components/views/aluno/aluno-create/aluno-create.component';
import { AlunoDeleteComponent } from './components/views/aluno/aluno-delete/aluno-delete.component';
import { AlunoReadComponent } from './components/views/aluno/aluno-read/aluno-read.component';
import { AlunoUpdateComponent } from './components/views/aluno/aluno-update/aluno-update.component';
import { AntroCreateComponent } from './components/views/antropometria/antro-create/antro-create.component';
import { AntroDeleteComponent } from './components/views/antropometria/antro-delete/antro-delete.component';
import { AntroReadComponent } from './components/views/antropometria/antro-read/antro-read.component';
import { AntroUpdateComponent } from './components/views/antropometria/antro-update/antro-update.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { ConfigComponent } from './components/views/config/config.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'categorias', component: CategoriaReadComponent},
    {path: 'categorias/create', component: CategoriaCreateComponent},
    {path: 'categorias/delete/:id', component: CategoriaDeleteComponent},
    {path: 'categorias/update/:id',component: CategoriaUpdateComponent},

    {path: 'alunos', component: AlunoReadComponent},
    {path: 'alunos/create', component: AlunoCreateComponent},
    {path: 'alunos/delete/:id', component: AlunoDeleteComponent},
    {path: 'alunos/update/:id',component: AlunoUpdateComponent},

    {path: 'antropometrias', component: AntroReadComponent},
    {path: 'antropometrias/create', component: AntroCreateComponent},
    {path: 'antropometrias/delete/:id', component: AntroDeleteComponent},
    {path: 'antropometrias/update/:id',component: AntroUpdateComponent},

    {path: 'config', component: ConfigComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
