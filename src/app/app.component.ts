import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServicesService } from './Services/user-services.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private services: UserServicesService) { }

  ngOnInit(): void {
  }
}
