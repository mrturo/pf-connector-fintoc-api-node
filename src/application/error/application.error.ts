import { Generic as GenericError } from '../../domain/error/generic.error';

export class Application extends GenericError {
  constructor(message: string | string[]) {
    super(message);
    Object.setPrototypeOf(this, Application.prototype);
  }
}
