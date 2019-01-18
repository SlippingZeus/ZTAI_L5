import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class DataService {
  private url = "http://localhost:8080";

  constructor(private http: HttpClient) {

  }
  getAll() {
    return this.http.get(this.url + '/api/posts')
      .pipe(
        map((x: any[]) => x.slice(0,10))
      );
  }


  get(id) {
    return this.http.get(this.url + '/photos/' + id);
  }


}
