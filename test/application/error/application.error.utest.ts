import { Application as ApplicationError } from '../../../src/application/error/application.error';

describe('Class Application Error', () => {
  it('Happy Path 1', async () => {
    let errorMsg = '';
    try {
      throw new ApplicationError('');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('');
  });
  it('Happy Path 2', async () => {
    let errorMsg = '';
    try {
      throw new ApplicationError(['']);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('');
  });
  it('Happy Path 3', async () => {
    let errorMsg = '';
    try {
      throw new ApplicationError('Hola');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Hola');
  });
  it('Happy Path 4', async () => {
    let errorMsg = '';
    try {
      throw new ApplicationError('Hola 1 | Hola 2');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Hola 1 | Hola 2');
  });
  it('Happy Path 5', async () => {
    let errorMsg = '';
    try {
      throw new ApplicationError('Hola 1 | ');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Hola 1');
  });
  it('Happy Path 6', async () => {
    let errorMsg = '';
    try {
      throw new ApplicationError(['Hola 1', 'Hola 2']);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Hola 1 | Hola 2');
  });
});
