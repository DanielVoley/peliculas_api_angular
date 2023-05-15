import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
    <button (click)="redirectToOtherComponent(myVariable,nameVariable)">Redireccionar</button>
  `
})
export class HomeComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: ApiService, private router: Router){

  }

  ngOnInit(): void {
    this.llenarData()
  }
  llenarData(){
    this.apiService.getData().subscribe(data => {
      this.data = data.genres;
      console.log(this.data);
    })
  }
  redirectToOtherComponent(paramValue: number, nameVariable: string) {
    this.router.navigate(['/show_genero/', paramValue,nameVariable]);
  }

}
