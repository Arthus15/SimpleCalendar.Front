export interface CalendarData {
    weeks: Week[];
    actualDayWeek: number;
    actualDayWeekPosition: number;
}

export interface Week{
    days: Day[];
}

export interface Day{
    weekDay: number;
    weather: string;
}

export interface Month {
    month: string;
    value: number;
}