import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensagemComponent } from 'src/app/components/mensagem/mensagem.component';


@Injectable({
  providedIn: 'root'
})

export class MensagemService {

  mensagem: string = '';

  constructor(private _snackBar: MatSnackBar) {}

  add(mensagem: string) {
    this.mensagem = mensagem;
    this._snackBar.openFromComponent(MensagemComponent, {duration: 7000, panelClass: 'snackDialog', horizontalPosition: 'center', verticalPosition: 'top'})
  }

  clear() {
    this._snackBar.dismiss();
  }
}

