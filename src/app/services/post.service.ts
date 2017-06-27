import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
    val: any;

    constructor(private http: Http) {
        console.log("service init in post")
    }
    getPost(val:any){
        
        return this.http.get('https://www.googleapis.com/books/v1/volumes?q='+val+":intitle:"+val).map(res => res.json());

    }
}