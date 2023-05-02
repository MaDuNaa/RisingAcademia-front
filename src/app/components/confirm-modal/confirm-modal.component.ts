import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';



@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  mensagem: string;
  confirmResult: Subject<boolean>


  constructor(private matDialogRef: MatDialogRef<any>,
    private serviceModal: ConfirmDialogService) {
    this.mensagem = '';
    this.confirmResult = new Subject();

   }

  ngOnInit(): void {
  }

  cancel(){
    this.confirmResult.next(false);
    this.matDialogRef.close();
  }

  confirm(){
    this.confirmResult.next(true);
    this.matDialogRef.close();
  }

  private confirmarEFechar(valor: boolean){
    this.confirmResult.next(valor);
    this.matDialogRef.close();
  }


}
