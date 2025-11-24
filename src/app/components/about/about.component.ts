import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pageTitle:string = 'About Us';
  constructor(private sharedService:SharedService,
              private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.pageTitle} - ${this.sharedService.blogTitle}`);
  }

}
