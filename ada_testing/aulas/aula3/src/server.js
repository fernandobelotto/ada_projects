import express from 'express'
import { userRoute } from './routes/user.route.js'

class MyServer {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(userRoute);
  }
}

export default new MyServer().server;
