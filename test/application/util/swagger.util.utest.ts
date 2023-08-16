import { Swagger as SwaggerUtil } from '../../../src/application/util/swagger.util';

describe('Class Swagger Util', () => {
  it('Happy Path', async () => {
    const swagger: SwaggerUtil = new SwaggerUtil();
    console.log(swagger.serve);
    console.log(swagger.setup);
    expect(swagger.urlPath).toBe('/api-docs');
  });
});
