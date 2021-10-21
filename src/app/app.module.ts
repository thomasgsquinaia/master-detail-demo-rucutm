import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./material-module";
import { AppComponent } from "./app.component";
import { EmployeeContainerComponent } from "./employee-container/employee-container.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { Route, RouterModule, Router } from "@angular/router";
import { route } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeContainerComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    RouterModule.forRoot(route)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
