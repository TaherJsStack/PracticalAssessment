import { Component, OnInit } from '@angular/core';

interface DateModal {
  dateFrom: string,
  dateTo:   string,
  hourForm: string,
  hourTo:   string,
  id: number,
  title: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PracticalAssessment';

  dateObj = { 
    dateFrom: "2023-11-28",
    dateTo:   "2023-11-30",
    hourForm: "12:00",
    hourTo:   "15:00",
    id: 1,
    title: "English"
  }
  constructor() {}

  ngOnInit(): void {
  //  let getDays = this.getDays(this.dateObj)

  //  console.log('getDays ---> ', ...getDays)

  }

  getDays(dateObj: DateModal): DateModal[] {
    const startDate = new Date(dateObj.dateFrom);
    const endDate = new Date(dateObj.dateTo);
    const days: DateModal[] = [];
    while (startDate <= endDate) {
      days.push({
        dateFrom: startDate.toISOString().split('T')[0],
        dateTo:   startDate.toISOString().split('T')[0],
        hourForm: dateObj.hourForm,
        hourTo:   dateObj.hourTo,
        id:       dateObj.id,
        title:    dateObj.title
      })
      startDate.setDate(startDate.getDate() + 1);
    }
    console.log('days -->', days)
    return days;
  }

}
