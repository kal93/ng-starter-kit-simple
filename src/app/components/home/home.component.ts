import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container-fluid">
      <div class="row">
        <mat-card class="col-xs-6 col-xs-offset-3">
          <mat-card-content>
            {{ 'home.works' | translate }}
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
