import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { EmployeeList } from "../employee-list";

@Component({
  selector: "app-employee-list",
  template: `
    <h3>List of employees</h3>
    <div *ngFor="let e of employees">
      <a href="#" (click)="onclick(e.id); (false)"
        ><h5>{{ e.firstName }} {{ e.lastName }}</h5></a
      >
    </div>
  `
})
export class EmployeeListComponent implements OnInit {
  @Output()
  rowClick = new EventEmitter();

  employees = EmployeeList;

  constructor() {}

  ngOnInit() {}

  onclick(id: number) {
    this.rowClick.next(id);
  }
}
