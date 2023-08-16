import { Http as HttpInterface } from './interface/http.interface';
export class Http implements HttpInterface {
  private _url!: string;
  private _publicKey!: string;
  private _secretKey!: string;
  constructor(url: string, key: {public: string, secret: string}) {
    this.url = url;
    this.publicKey = key.public;
    this.secretKey = key.secret;
  }
  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }
  public get publicKey(): string {
    return this._publicKey;
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public get secretKey(): string {
    return this._secretKey;
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public async pushAlert(
    title: string,
    process: string,
    description: string
  ): Promise<void> {
    const conf = {
      method: 'post',
      url: this.url,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        accept: 'application/json; charset=utf-8',
        Authorization: `Api-Token ${this.token}`
      },
      data: {
        eventType: this.eventType,
        title: title,
        timeout: this.timeout,
        entitySelector: `type(SERVICE),entityId(SERVICE-${this.entity})`,
        properties: {
          Application: this.application,
          allowDavisMerge: 'true',
          Process: process,
          Description: description
        }
      },
      timeout: 100000,
      httpsAgent: new https.Agent({
        keepAlive: true,
        rejectUnauthorized: false
      })
    };
    try {
      await axios(conf);
    } catch (error) {
      if (error instanceof Error) {
        throw new InfrastructureError([
          'Dynatrace.pushAlert',
          error.message,
          JSON.stringify({ in: conf, out: error })
        ]);
      }
    }
  }
}
