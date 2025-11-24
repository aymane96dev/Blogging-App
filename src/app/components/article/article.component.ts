import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ARTICLES } from 'src/app/models/mock-articles';
import { ArticleService } from 'src/app/services/article.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article:any = undefined;
  articles:Article[] = ARTICLES;

  constructor(private activatedRoute:ActivatedRoute,
              private articleService:ArticleService,
              private sharedService:SharedService,
              private router:Router,
              private titleService:Title,
              private meta: Meta) { }

  ngOnInit(): void {
    this.getArticle(); 
  }

  getArticle():void{
    this.activatedRoute.params.subscribe(params => {
      console.log(params['key']);
      this.articleService.getArticle(params['key']).subscribe(article => {
        if(article === undefined){
          this.router.navigateByUrl('error404');
        }
        this.article = article;
        this.titleService.setTitle(`${this.article.title} - ${this.sharedService.blogTitle}`);
        this.meta.addTags([
          {name:'description', content:this.article.description },
          {property:'og:title', content:`${this.article.title} - ${this.sharedService.blogTitle}`},
          {property:'og:type', content:'website'},
          {property:'og:url', content: this.sharedService.baseUrl + 'article/' + this.article.key },
          {property:'og:image', content: this.article.imageUrl },
          {property:'og:site_name', content: this.sharedService.blogTitle}
        ]);
      })
    })
  }

}
