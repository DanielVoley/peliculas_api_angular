import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resenias',
  templateUrl: './resenias.component.html',
  styleUrls: ['./resenias.component.css']
})
export class ReseniasComponent implements OnInit{
  public componentName: number = 0;
  public componentToDisplay: any;
  data: any[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.componentName = params['paramPelicula'];
      this.llenarResenias(this.componentName);
      console.log("id mi pelicula", this.componentName);
    });
  }

  llenarResenias(idPelicula: number){
    this.apiService.getDataResenia(idPelicula).subscribe(data => {
      this.data = data.results;
      this.data.forEach(element => {
        console.log('============');
        console.log(element);
      });
      console.log(this.data);
    })
  }

  counter(i: number) {
    return new Array(i);
  }
}
