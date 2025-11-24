# Blog App – Angular 12 


## 📖 Overview


This project is a blog-style web application built with **Angular 12**, enhanced with **Angular Universal (SSR)** to provide server-side rendering for improved SEO, faster load times, and pre-rendering of routes.


## 🎯 Project Purpose

This application appears to be designed as a **blog platform**, with the following goals:

- Display blog articles in a fast, optimized way.
- Improve SEO using SSR and pre-rendering.
- Deliver a smooth client-side experience with Angular.
- Provide faster page rendering for better Google indexing.


## 🚀 Main Technologies

- **Angular 12** (components, routing, forms, animations)
- **Angular Universal** (SSR) for server-side rendering
- **Express.js** as the SSR server
- **RxJS 6** for reactive data handling
- **TypeScript 4.2**
- **Angular CLI** for development and builds


## 📂 Project Structure

    
    ng-blog/
    └── blog-app/
        ├── blog-server/   # Mocking server with static data
        └── src/    # Main application source code (components, modules, pages, assets)

## 🏗️ Available Scripts


### Development


    npm start # Standard Angular SPA
    npm run dev:ssr # SSR server in development mode


### Build


    npm run build # Standard Angular build
    npm run build:ssr # Build Angular + SSR bundles
    npm run prerender # Pre-render routes (SEO)

### Production SSR
 

    npm run serve:ssr    

## Project Development & Workflow Guide


### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


## 📌 Requirements

- Node 12+ or Node 14+

- npm 6+


## License

Free to use according to project needs.
