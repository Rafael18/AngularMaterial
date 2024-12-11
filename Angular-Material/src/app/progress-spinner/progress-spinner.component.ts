import { Component } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { concat, interval, map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent {
  public loadingPorcent = 0;
  public queryValue = 0;
  currentPlayback=0;
  public queryMode: ProgressBarMode = 'query';

  ngOnInit(){
    this.loadinProgress(500,95)
        .subscribe(i => this.loadingPorcent = i);

    this.loadinProgress(350,95)
        .subscribe(i => this.currentPlayback = i);

    concat(
      interval(5000).pipe(
        take(1),
        tap(_ => this.queryMode = 'determinate')
    ),

    this.loadinProgress(500,50)
        ).subscribe(i => this.queryValue = i);
  }

  loadinProgress(speed: number, takeUntil: number){
    return interval(speed).pipe(
      map(i => i * 5),
      takeWhile( i => i <= takeUntil)
    )
  }
}
