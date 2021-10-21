import { EmployeeContainerComponent } from "./employee-container/employee-container.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";

export const route = [
  {
    path: "employees",
    component: EmployeeContainerComponent,
    children: [
      {
        path: ":id",
        component: EmployeeDetailComponent
      }
    ]
  },
  { path: "**", redirectTo: "employees" }
];
