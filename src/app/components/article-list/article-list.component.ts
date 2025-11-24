import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from 'src/app/models/article';
import { ARTICLES } from 'src/app/models/mock-articles';
import { ArticleService } from 'src/app/services/article.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService:ArticleService,
              private sharedService:SharedService,
              private titleService:Title) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles():void{
    this.articleService.getArticles().subscribe(articles =>{
      this.articles = articles;
      this.titleService.setTitle(this.sharedService.blogTitle);
    })
  }

}
