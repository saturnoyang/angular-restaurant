import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  data: any[] = [];
  title = 'angular-restaurant';

  constructor( private dataService: DataService ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getData('/GetPlaza').subscribe((response) => {
      this.data = JSON.parse(response.body);
    });
  }

}
