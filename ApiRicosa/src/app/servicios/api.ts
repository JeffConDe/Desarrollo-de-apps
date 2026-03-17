import { inject, Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';  
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);
  private apiUrl = 'https://rickandmortyapi.com/api/character';
  
 getDatos() {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => res.results.map((item: any) => {
       
        const id = item.url.split('/')[6]; 
        return {
          name: item.name,
          image: item.image,
        };
      }))
    );
  }
}
