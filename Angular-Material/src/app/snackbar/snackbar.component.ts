import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMsnComponent } from './snackbar-msn/snackbar-msn.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  constructor(private snackbar: MatSnackBar){}

  ngOnInit(){
    // this.snackbar.open('Hello Guys', 'Close', {
    //   duration: 2000
    // });
  }

  public openSnackbar(){
    const snackBar = this.snackbar.open('Hello Guys', 'Close', {
      duration: 2000
    });

    snackBar.afterDismissed().subscribe(_ => {
      console.log('Dismissed');
    });

    snackBar.afterDismissed().subscribe(_ => {
      console.log('After acntion');
    })
  }

  public openFromCom(){
    const snackBar = this.snackbar.openFromComponent(SnackbarMsnComponent, {
      data:'Quero Café',
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });


  }
}
