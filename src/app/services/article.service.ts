import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article';
import { ARTICLES } from '../models/mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles:Article[] = [];

  article:any = undefined;

  constructor(private http:HttpClient) { }

  getArticles(){
    return this.http.get<Article[]>('http://localhost:8000/articles');
  }

  getArticle(key:string){
    return this.http.get<Article>('http://localhost:8000/articles/'+key);
  }
}
