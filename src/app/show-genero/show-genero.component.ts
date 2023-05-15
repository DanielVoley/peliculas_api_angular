import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-genero',
  templateUrl: './show-genero.component.html',
  styleUrls: ['./show-genero.component.css'],
  template: `
  <h1>Componente:</h1>
  <ng-container *ngIf="componentToDisplay; else loading">{{ componentToDisplay }}</ng-container>
  <ng-template #loading>Cargando...</ng-template>
`,
})
export class ShowGeneroComponent  implements OnInit {
  public componentName: number = 0;
  public componentToDisplay: any;
  data: any[] = [];
  titlePelicula : string = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.componentName = params['paramName'];
      this.titlePelicula = params['nameVariable'];

      this.llenarData(this.componentName);


      // switch (this.componentName) {
      //   case 1:
      //     // this.componentToDisplay = Component1;
      //     break;
      //   case 2:
      //     // this.componentToDisplay = Component2;
      //     break;
      //   default:
      //     this.componentToDisplay = null;
      //     break;
      // }
    });
  }

  llenarData(idGenero: number){
    this.apiService.getDataGenero(idGenero).subscribe(data => {
      this.data = data.results;
      this.data.forEach(element => {
        console.log('============');
        console.log(element);
      });
      console.log(this.data);
    })
  }

  verResenia(idPelicula: number){
    this.router.navigate(['/show_resenia/', idPelicula]);
  }

}

