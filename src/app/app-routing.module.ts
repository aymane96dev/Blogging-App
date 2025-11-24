import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleComponent } from './components/article/article.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'articles',component: ArticleListComponent},
  {path:'about',component: AboutComponent},
  {path:'error404',component: NotFoundComponent},
  {path:'',component: ArticleListComponent},
  {path:'article/:key',component: ArticleComponent},
  {path:'**',component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
