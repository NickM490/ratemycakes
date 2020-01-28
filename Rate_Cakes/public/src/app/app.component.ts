import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  @Input() commentToShow: any;
  cakes: any[];
  comments: any[];
  name: string;
  image_url: string;
  comment: string;
  rating: number;
  makeCake: any;
  makeComment: any;
  detail: any;
  details: any;
  nameError: boolean = false;
  imageError: boolean = false;
  rateError: boolean = false;
  commentError: boolean = false;
  
  
  constructor(private _httpService: HttpService){}

  
  ngOnInit() {
    this.makeCake = { name: "", image_url: "" };
    this.makeComment = { comment: [], rating: [] };
    this.detail = { comment: "", rating: 0 }
    this.getAllCakes();
  }

  getAllCakes() {
    let observable = this._httpService.getCakes();
    observable.subscribe((data: any) => {
        console.log("Got our Cakes!", data)
        this.cakes = data;
    });
  }


  newCake() {
    if(this.makeCake.name < 1){
      this.nameError = true;
    }
    if(this.makeCake.image_url < 1){
      this.imageError = true;
    }
    let observable = this._httpService.addCake(this.makeCake);
    observable.subscribe((data: any) => {
        console.log("Creating a new Cake!", data)
        this.getAllCakes();
    this.makeCake = { name: "", image_url: "" }
  });
  }

  newComment(id, i) {
    this.makeComment.comment = this.makeComment.comment[i];
    this.makeComment.rating = this.makeComment.rating[i];
    if(this.makeComment.comment[i].length < 1){
      this.commentError = true
      return;
    }
    if(this.makeComment.rating[i].length < 0){
      this.rateError = true
      return;
    }
    
    let observable = this._httpService.addCommment_Rating(id, this.makeComment);
    observable.subscribe((data: any) => {
        console.log("Creating a new Comment and Rating!", data)
    this.makeComment = { comment: [], rating: [] }
    this.getComments(id)
  });
  }

  getComments(id){
    // debugger
    let observable = this._httpService.getComment(id);
    observable.subscribe((data: any) => {
        console.log("Got our Comments", data)
        console.log(id)
        this.detail = data;
    });

}
}
