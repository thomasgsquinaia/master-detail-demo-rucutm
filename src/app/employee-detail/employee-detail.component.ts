import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, throttleTime, filter, switchMap } from "rxjs/operators";
import { EmployeeList } from "../employee-list";
import { Observable } from "rxjs";

@Component({
  selector: "app-employee-detail",
  template: `
    <table style="width:100%" *ngIf="(employee$ | async) as e">
      <tr>
        <td>Emloyee Id</td>
        <td>{{ e.id }}</td>
      </tr>
      <tr>
        <td>First Name</td>
        <td>{{ e.firstName }}</td>
      </tr>
      <tr>
        <td>Last Name</td>
        <td>{{ e.lastName }}</td>
      </tr>
      <tr>
        <td>Age</td>
        <td>{{ e.age }}</td>
      </tr>
      <tr>
        <td>Title</td>
        <td>{{ e.title }}</td>
      </tr>
    </table>
  `
})
export class EmployeeDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  get employee$() {
    return this.route.params.pipe(map(({ id }) => EmployeeList[+id]));
  }
}
