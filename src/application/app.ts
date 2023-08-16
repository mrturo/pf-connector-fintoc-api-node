import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import { Configuration as ConfigurationUtil } from '../domain/util/configuration.util';
import { Logger as LoggerUtil } from '../domain/util/logger.util';
import { Random as RandomUtil } from '../domain/util/random.util';
import { Controller as ControllerInterface } from './controllers/controller.interface';
import { Swagger as SwaggerUtil } from './util/swagger.util';

class App {
  public app: express.Application;
  public port: number;
  constructor(controllers: ControllerInterface[]) {
    this.app = express();
    this.port = ConfigurationUtil.port();
    this.initializeMiddlewares();
    this.initializeRoutes(controllers);
  }
  private initializeMiddlewares() {
    this.app.use(
      bodyParser.json({
        limit: '50mb'
      })
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(helmet());
    this.app.use(
      (
        error: Error,
        req: express.Request,
        res: express.Response,
        // eslint-disable-next-line unused-imports/no-unused-vars
        next: () => void // eslint-disable-line @typescript-eslint/no-unused-vars
      ) => {
        let status: number, message: string;
        switch (error.name) {
          case 'UnauthorizedError':
            status = 401;
            message = 'Invalid token';
            break;
          default:
            status = 500;
            message = error.message;
            break;
        }
        return res.status(status).send({
          message
        });
      }
    );
    const swagger: SwaggerUtil = new SwaggerUtil();
    this.app.use(swagger.urlPath, swagger.serve, swagger.setup);
  }
  private initializeRoutes(controllers: ControllerInterface[]) {
    controllers.forEach((controller: ControllerInterface) => {
      this.app.use(controller.path, controller.router);
    });
  }
  public listen() {
    this.app.listen(this.port, () => {
      const log = RandomUtil.get();
      ConfigurationUtil.showValues(log);
      LoggerUtil.info([log, `App listening on the port ${this.port}`]);
      console.log('*****');
    });
  }
}
export default App;
