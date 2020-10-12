import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import snippetRouter from './snippets/snippets.router';
import mongoose from 'mongoose'

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

  private initRoutes(routes: Array<any>): any {
    routes.forEach((route) => {
      this.app.use(route.path, route.handler)
    });
  }

  private initDB(): any {
    return mongoose.connect('mongodb://database/code-snippets', {
      useMongoClient: true
    });
  }

  public bootstrap(): any {
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.initRoutes(this.routes);
    this.initDB().then(() => {
      console.log("MongoDB connected")
    }).then(() => {
      try {
        this.app.listen(3000, () => {
          console.log("Server listening port 3000")
        });
      } catch(e) {
        console.log(e);
      }
    });
  }
}