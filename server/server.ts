import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { createServer, Server } from "http";
import mongoose from "mongoose";
import methodOverride from "method-override";
import { autoCreateUsers } from "./src/Modules/DBCommon/Service";
import routes from "./src/routes";

class App {
  public app: Application;
  public server: Server;
  public mongoUrl: string = "mongodb://localhost:27017/fasting_assesment";

  constructor() {
    this.app = express();

    this.server = createServer(this.app);

    this.server.listen(4000);

    this.app.use(cors());
    this.app.use(cookieParser());
    this.app.use(methodOverride("X-HTTP-Method-Override"));
    this.app.use(express.json());

    this.app.use(routes);

    this.app.enable("trust proxy");

    this.config();
    this.mongoSetup();
    autoCreateUsers();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(express.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(express.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    mongoose.set("useFindAndModify", false);
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }
}

export default new App().app;
