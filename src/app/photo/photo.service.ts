import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhotoInterface } from '../interface/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(userName: string) {
    return this.http.get<PhotoInterface[]>(`http://localhost:3000/${userName}/photos`)
  }
  listFromUserPaginator(userName: string, page: number) {

    const params = new HttpParams().append('page', page.toString())
    return this.http.get<PhotoInterface[]>(`http://localhost:3000/${userName}/photos`, { params })
  }
}
