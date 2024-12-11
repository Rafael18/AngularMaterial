import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public mensagem ='';
  constructor(private dialog: MatDialog){}

  public openDialog() {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: 'Bitor',
      enterAnimationDuration: '1500ms',
      exitAnimationDuration: '1500ms'
    });

    dialogRef.afterClosed().subscribe((result) => {
        this.mensagem = result !== undefined ? result :''
    });
  }
}
