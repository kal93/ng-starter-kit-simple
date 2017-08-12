import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!--include grid to check if flexboxgrid work -->
    <!--include md-icon for material and font awesome check-->
    <!--include translate to check if i18n works-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-6 col-xs-offset-6">
          <md-icon fontSet="fontawesome" fontIcon="fa-thumbs-up"></md-icon>
          {{ 'home.works' | translate }}
        </div>
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
