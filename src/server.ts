import App from './application/app';
import { Base as BaseController } from './application/controllers/base.controller';

export class Server {
  public static init(): App {
    return new App([new BaseController()]);
  }
}
Server.init().listen();
