import { Component, OnInit } from "@angular/core";
import { Observable, of, merge } from "rxjs";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter, switchMap, map, tap } from "rxjs/operators";

@Component({
  selector: "app-employee-container",
  template: `
    <mat-drawer-container class="example-container">
      <mat-drawer mode="side" position="end" [opened]="showSideNav$ | async">
        <a style="float:right" href="#" (click)="closeDetails(); (false)"
          >x Close</a
        >
        <router-outlet></router-outlet
      ></mat-drawer>
      <mat-drawer-content
        ><app-employee-list (rowClick)="onRowClick($event)"></app-employee-list
      ></mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: ["mat-drawer {  width: 50vw;}"]
})
export class EmployeeContainerComponent implements OnInit {
  showSideNav$: Observable<boolean>;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.onShowSideNav();
  }

  ngOnInit() {}

  private onRowClick(id: any) {
    this.router.navigate(["employees", id]);
  }

  private closeDetails() {
    this.router.navigate(["."], {
      relativeTo: this.route.parent
    });
  }

  private onShowSideNav() {
    const initParams$ = of(
      this.route.firstChild ? this.route.firstChild.params : null
    );
    const params$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      switchMap(_ => {
        return this.route.firstChild ? this.route.firstChild.params : of(false);
      }),
      map(params => !!params)
    );
    this.showSideNav$ = merge(initParams$, params$).pipe(
      map(data => {
        return !!data;
      })
    );
  }
}
