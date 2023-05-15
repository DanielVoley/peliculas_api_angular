import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private urlApi = `https://api.themoviedb.org/3/genre/movie/list?api_key=bfa0b28e28389a0fa2d8292bd7aaafa8&language=es-ES`;

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public getDataGenero(idGenero: number): Observable<any>{
    const textApi2 : string = 'https://api.themoviedb.org/3/discover/movie?api_key=bfa0b28e28389a0fa2d8292bd7aaafa8&language=es-ES&with_genres='+idGenero;
    console.log('textApi2');
    console.log(textApi2);
    return this.http.get<any>(textApi2);
  }

  public getDataResenia(idPelicula: number): Observable<any>{
    const textApiResenia : string = 'https://api.themoviedb.org/3/movie/'+idPelicula+'/reviews?api_key=bfa0b28e28389a0fa2d8292bd7aaafa8&language=en-ES&page=1';
    console.log('textApiResenia');
    console.log(textApiResenia);
    return this.http.get<any>(textApiResenia);
  }
}
