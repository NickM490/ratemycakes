import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {


  }
  
  getCakes() {
    return this._http.get('/cakes');
  }
  
  
  addCake(newcake){
    return this._http.post('/new', newcake)
  }
  
  addCommment_Rating(id, newcomment ) {
    return this._http.post(`/${id}`, newcomment);
  }
  
  getComment(id) {
    return this._http.get(`/${id}`);
  }

  deleteCake(id){
    return this._http.delete(`/remove/${id}`)
  }

  updateCake(id, updatecake){
    return this._http.put(`/${id}`, updatecake)
  }

}
