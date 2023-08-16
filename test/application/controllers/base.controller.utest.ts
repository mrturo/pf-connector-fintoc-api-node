import express from 'express';
import { Base as BaseController } from '../../../src/application/controllers/base.controller';

describe('Class Base Controller', () => {
  it('Happy Path', async () => {
    const mReq = {
      body: {}
    } as express.Request;
    const mRes = {
      json: jest.fn(),
      status: jest.fn()
    } as unknown as express.Response;
    const base: BaseController = new BaseController();
    base.getHealthCheck(mReq, mRes);
    expect(base.path).toBe('/');
  });
});
