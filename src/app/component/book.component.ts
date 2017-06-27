import { Component } from '@angular/core';
import {PostsService} from '../services/post.service';

@Component({
    moduleId:module.id,
    selector: 'book',
    templateUrl: `book.component.html`,
    providers:[PostsService]
})
export class BookComponent  { 
    posts: Post[];
    constructor(private PostsService:PostsService){


    }

    searchBook(search:any){
       this.PostsService.getPost(search).subscribe(posts =>{
           this.posts=posts.items;
          // console.log(posts.items[1].volumeInfo.publishedDate)
       })

    }

 }
 interface Post{
     title:string,
     description:string
 }
