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
import { ConfigComponent } from './components/views/config/config.component';
import { FuncionarioCreateComponent } from './components/views/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './components/views/funcionario/funcionario-delete/funcionario-delete.component';
import { FuncionarioReadComponent } from './components/views/funcionario/funcionario-read/funcionario-read.component';
import { FuncionarioUpdateComponent } from './components/views/funcionario/funcionario-update/funcionario-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { PerfilUsuarioComponent } from './components/views/perfil/perfil-usuario/perfil-usuario.component';
import { TreinoCreateComponent } from './components/views/treino/treino-create/treino-create.component';
import { TreinoDeleteComponent } from './components/views/treino/treino-delete/treino-delete.component';
import { TreinoReadComponent } from './components/views/treino/treino-read/treino-read.component';
import { TreinoUpdateComponent } from './components/views/treino/treino-update/treino-update.component';
import { TreinoCreateGeralComponent } from './components/views/treino/treino-create-geral/treino-create-geral.component';
import { PerfilFuncionarioComponent } from './components/views/perfil/perfil-funcionario/perfil-funcionario.component';
import { AntroDetalheComponent } from './components/views/antropometria/antro-detalhe/antro-detalhe.component';
import { AuthenticationComponent } from './components/views/layout/authentication/authentication.component';
import { LoginComponent } from './components/account/login/login.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { AuthGuard } from './components/account-guard/shared/auth.guard';

const routes: Routes = [

      {path: '', component: HomeComponent},

      {path: 'alunos', component: AlunoReadComponent},
      {path: 'alunos/:id/antropometrias', component: AntroReadComponent},
      {path: 'alunos/create', component: AlunoCreateComponent},
      {path: 'alunos/delete/:id', component: AlunoDeleteComponent},
      {path: 'alunos/update/:id',component: AlunoUpdateComponent},
  
      {path: 'antropometrias', component: AntroReadComponent},
      {path: 'antropometrias/create', component: AntroCreateComponent},
      {path: 'antropometrias/delete/:id', component: AntroDeleteComponent},
      {path: 'antropometrias/update/:id',component: AntroUpdateComponent},
      {path: 'antropometrias/detalhe', component: AntroDetalheComponent},
  
      {path: 'funcionarios', component: FuncionarioReadComponent},
      {path: 'funcionarios/create', component: FuncionarioCreateComponent},
      {path: 'funcionarios/delete/:id', component: FuncionarioDeleteComponent},
      {path: 'funcionarios/update/:id',component: FuncionarioUpdateComponent},
  
      {path: 'treinos', component: TreinoReadComponent},
      {path: 'treinos/create', component: TreinoCreateComponent},
      {path: 'treinos/delete/:id', component: TreinoDeleteComponent},
      {path: 'treinos/update/:id',component: TreinoUpdateComponent},
  
      {path: 'treinos/criar', component: TreinoCreateGeralComponent},
  
      {path: 'perfils', component: PerfilUsuarioComponent},
      {path: 'perfils/Funcionario', component: PerfilFuncionarioComponent},

      {path: 'config', component: ConfigComponent},

    // {
    //   path: '', 
    //   component: AuthenticationComponent,
    //   children: [
    //     { path: '', redirectTo: 'login', pathMatch: 'full' },
    //     { path: 'login', component: LoginComponent },
    //     { path: 'create-account', component: CreateAccountComponent }
    //   ]
    // }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
