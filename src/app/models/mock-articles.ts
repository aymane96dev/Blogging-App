import { Article } from "./article";

export const ARTICLES: Article[]=[
    {
        id:1,
        title:'My first article',
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        description:"This is my first article! It's great, Please read it.",
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg'
    },
    {
        id:2,
        title:'The second article',
        content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        description:"This is my second article! It's great, Please read it.",
        key: 'the-second-article',
        date: new Date(),
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular_solidBlack.svg'
    }
];