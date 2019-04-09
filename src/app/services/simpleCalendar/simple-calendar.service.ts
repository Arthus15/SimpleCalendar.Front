import { CalendarData } from './../../Model/calendarData';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimpleCalendarService {

  private baseUrlGet = 'https://localhost:44329/api/SimpleCalendar';

  constructor(private httpClient: HttpClient) { }

  public async GetCalendarData(year: number, month: number) : Promise<CalendarData>{
    return await this.httpClient.get<CalendarData>(`${this.baseUrlGet}/${year}/${month}`).toPromise();
  }


}
