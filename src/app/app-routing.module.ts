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
import { MensalidadesComponent } from './components/views/mensalidades/mensalidades.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { AjudaComponent } from './components/views/ajuda/ajuda.component';
import { PerfilComponent } from './components/login/perfil/perfil.component';
import { AlterarSenhaComponent } from './components/login/alterar-senha/alterar-senha.component';




const routes: Routes = [


          
          {path: 'login', component: LoginComponent},
          { path: '', redirectTo: 'login', pathMatch: "full" },
          {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    
          {path: 'alunos', component: AlunoReadComponent, canActivate: [AuthGuard]},
          {path: 'alunos/:id/antropometrias', component: AntroReadComponent , canActivate: [AuthGuard]},
          {path: 'alunos/:id/mensalidades', component: MensalidadesComponent , canActivate: [AuthGuard]},
          {path: 'alunos/create', component: AlunoCreateComponent, canActivate: [AuthGuard]},
          {path: 'alunos/delete/:id', component: AlunoDeleteComponent, canActivate: [AuthGuard]},
          {path: 'alunos/update/:id',component: AlunoUpdateComponent, canActivate: [AuthGuard]},
      
          {path: 'antropometrias', component: AntroReadComponent, canActivate: [AuthGuard]},
          {path: 'antropometrias/create', component: AntroCreateComponent, canActivate: [AuthGuard]},
          {path: 'antropometrias/delete/:id', component: AntroDeleteComponent, canActivate: [AuthGuard]},
          {path: 'antropometrias/update/:id',component: AntroUpdateComponent, canActivate: [AuthGuard]},
          {path: 'antropometrias/detalhe', component: AntroDetalheComponent, canActivate: [AuthGuard]},
      
          {path: 'funcionarios', component: FuncionarioReadComponent, canActivate: [AuthGuard]},
          {path: 'funcionarios/create', component: FuncionarioCreateComponent, canActivate: [AuthGuard]},
          {path: 'funcionarios/delete/:id', component: FuncionarioDeleteComponent, canActivate: [AuthGuard]},
          {path: 'funcionarios/update/:id',component: FuncionarioUpdateComponent, canActivate: [AuthGuard]},
      
          {path: 'treinos', component: TreinoReadComponent, canActivate: [AuthGuard]},
          {path: 'treinos/create', component: TreinoCreateComponent, canActivate: [AuthGuard]},
          {path: 'treinos/delete/:id', component: TreinoDeleteComponent, canActivate: [AuthGuard]},
          {path: 'treinos/update/:id',component: TreinoUpdateComponent, canActivate: [AuthGuard]},
      
          {path: 'treinos/criar', component: TreinoCreateGeralComponent, canActivate: [AuthGuard]},
      
          {path: 'perfils', component: PerfilUsuarioComponent, canActivate: [AuthGuard]},
          {path: 'perfils/Funcionario', component: PerfilFuncionarioComponent, canActivate: [AuthGuard]},
    
          {path: 'config', component: ConfigComponent, canActivate: [AuthGuard]},
    
          {path: 'mensalidades', component: MensalidadesComponent, canActivate: [AuthGuard]},

          {path: 'ajuda', component: AjudaComponent, canActivate: [AuthGuard]},

          {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},

          {path: 'alterar-senha', component: AlterarSenhaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
