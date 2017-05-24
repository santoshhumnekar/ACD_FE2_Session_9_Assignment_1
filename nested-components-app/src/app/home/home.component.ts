import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContainComponent } from '../contain/contain.component';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MyserviceService]
})
export class HomeComponent implements OnInit {

  fromService : string;

  constructor(private _getservice:MyserviceService) {

   }

  ngOnInit() {
    this.fromService = this._getservice.someMethod();
  }

}
