import * as dotenv from 'dotenv';
import { Configuration as ConfigurationUtil } from './configuration.util';

export class Environment {
  public static init(): Environment {
    let nodeEnv = '';
    try {
      nodeEnv = ConfigurationUtil.nodeEnv();
    } catch (error) {
      nodeEnv = '';
    }
    const amb: Environment = new Environment(nodeEnv);
    dotenv.config({ path: amb.file });
    return amb;
  }
  public static PRODUCTION(): string {
    return 'production';
  }
  public static DEVELOPMENT(): string {
    return 'development';
  }
  public static TESTING(): string {
    return 'testing';
  }
  public static JENKINS(): string {
    return 'test';
  }
  public static FILE_ENV(): string {
    return '.env';
  }
  private _value!: string;
  private _file!: string;
  constructor(value: string | undefined = undefined) {
    this.value = value;
  }
  public get value(): string {
    return this._value;
  }
  private set value(value: string | undefined) {
    value = value ? value.trim().toLowerCase() : '';
    value = value === '' ? Environment.PRODUCTION() : value;
    this._value = value;
    this.file = Environment.FILE_ENV();
  }
  public get file(): string {
    return this._file;
  }
  private set file(value: string) {
    this._file = value;
  }
}
Environment.init();
