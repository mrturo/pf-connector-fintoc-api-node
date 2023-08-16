export class Generic extends Error {
  constructor(message: string | string[]) {
    const splittedMessage: string[] = [];
    (typeof message === 'string' ? message.trim().split('|') : message)
      .filter((e) => e.trim().length > 0)
      .forEach((element) => splittedMessage.push(element.trim()));
    super(splittedMessage.join(' | '));
    Object.setPrototypeOf(this, Generic.prototype);
  }
}
