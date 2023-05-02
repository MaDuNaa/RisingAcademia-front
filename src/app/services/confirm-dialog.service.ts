import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ConfirmModalComponent } from 'src/app/components/confirm-modal/confirm-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  titulo: string;
  private subject: Subject<boolean>
  resultado: boolean;

  constructor(private dialog: MatDialog) {
    this.titulo = '';
    this.subject = new Subject();
    this.resultado = false;
  }

  abrir(mensagem: string){
    const dialogRef = this.dialog.open(ConfirmModalComponent, {panelClass: 'confirmDialog'});
    dialogRef.componentInstance.mensagem = mensagem;
    return dialogRef.componentInstance.confirmResult;
  }


}
