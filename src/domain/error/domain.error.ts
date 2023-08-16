import { Generic as GenericError } from './generic.error';

export class Domain extends GenericError {
  constructor(message: string | string[]) {
    super(message);
    Object.setPrototypeOf(this, Domain.prototype);
  }
}
