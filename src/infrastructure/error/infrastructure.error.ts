import { Generic as GenericError } from '../../domain/error/generic.error';

export class Infrastructure extends GenericError {
  constructor(message: string | string[]) {
    super(message);
    Object.setPrototypeOf(this, Infrastructure.prototype);
  }
}
