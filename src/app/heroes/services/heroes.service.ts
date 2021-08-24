import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Interfaces
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;
  constructor(
    private http:HttpClient
  ) { }

  public getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes`);
  }

  public getHeroePorId( id:string): Observable<Heroe>{
    return this.http.get<Heroe>(`${ this.baseUrl }/heroes/${ id }`);
  }

  public getSugerencias( termino:string ): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes?q=${ termino }&_limit=6`);
  }

  public agregarHeroe( heroe:Heroe ): Observable<Heroe>{
    return this.http.post<Heroe>(`${ this.baseUrl }/heroes`, heroe);
  }

  public actualizarHeroe( heroe:Heroe ): Observable<Heroe>{
    return this.http.put<Heroe>(`${ this.baseUrl }/heroes/${ heroe.id }`, heroe);
  }

  public borrarHeroe( id:string ): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }/heroes/${ id }`);
  }
}
