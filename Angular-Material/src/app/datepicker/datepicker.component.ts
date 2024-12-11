import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  public startDate = moment();
  public minDate = moment([2024,10,1]);
  public maxDate = moment([2024,11,30]);

  constructor(private platfrom: Platform){}

  get isToucheDevice(){
    return this.platfrom.ANDROID || this.platfrom.IOS;
  }
}
