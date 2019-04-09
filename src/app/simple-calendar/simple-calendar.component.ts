import { SimpleCalendarService } from './../services/simpleCalendar/simple-calendar.service';
import { CalendarData, Month } from './../Model/calendarData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calendar',
  templateUrl: './simple-calendar.component.html',
  styleUrls: ['./simple-calendar.component.scss']
})
export class SimpleCalendarComponent implements OnInit {

  //start Calendar Properties 
  weekDays: string[] = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
  years: number[] = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
  months: Month[] = [{month: 'January', value: 1}, {month: 'February', value: 2}, {month: 'March', value: 3},{month: 'April', value: 4}, {month: 'May', value: 5},
  {month: 'June', value: 6},{month: 'July', value: 7},{month: 'August', value: 8},{month: 'September', value: 9},{month: 'October', value: 10},{month: 'November', value: 11},
  {month: 'December', value: 12}];
  calendarData: CalendarData;
  selectedYear : number;
  selectedMonth: number;


  constructor(private _simpleCalendarService: SimpleCalendarService) { }

  async ngOnInit() {
    console.log('Starting...');
    let today = new Date();
    this.selectedMonth = today.getMonth() + 1; 
    this.selectedYear= today.getFullYear();
    this.calendarData = await this._simpleCalendarService.GetCalendarData(this.selectedYear,this.selectedMonth); 
  }

  public async getWeather() {
    console.log("Year: " + this.selectedYear);
    console.log("Month: " + this.selectedMonth);
    this.calendarData = await this._simpleCalendarService.GetCalendarData(this.selectedYear,this.selectedMonth); 
    console.log("Get Done" + this.calendarData.weeks[0].days[4].weekDay);
  }
}
