import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import snippetRouter from './snippets/snippets.router';

export default class Server {
  private app: Application;
  private routes: Array<any>;

  constructor() {
    this.app = express();
    this.routes = [
      {
        path: '/snippets',
        handler: snippetRouter
      }
    ];
  }

  private initRoutes(routes: Array<any>) {
    routes.forEach((route) => {
      this.app.use(route.path, route.handler)
    });
  }

  public bootstrap(): any {
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.initRoutes(this.routes);

    try {
      this.app.listen(3000, () => {
        console.log("Servidor rodando")
      });
    } catch(e) {
      console.log(e);
    }
  }
}