import {
  format as formatWinston,
  loggers as loggersWinston,
  transports as transportsWinston
} from 'winston';
import { Configuration as ConfigurationUtil } from './configuration.util';
import { Environment as EnvironmentUtil } from './environment.util';

export class Logger {
  private static updateBase() {
    if (loggersWinston.has('app-logger') === true) {
      loggersWinston.close('app-logger');
    }
    loggersWinston.add('app-logger', {
      format: formatWinston.combine(
        formatWinston.simple(),
        formatWinston.colorize({ all: true }),
        formatWinston.timestamp({
          format: new Date().toLocaleString('es-CL', {
            timeZone: 'America/Santiago'
          })
        }),
        formatWinston.printf(
          (log) => `${log.timestamp} | ${log.level} | ${log.message}`
        )
      ),
      transports: [
        new transportsWinston.Console({
          level: 'debug'
        })
      ]
    });
  }
  public static available(): boolean {
    return ![EnvironmentUtil.JENKINS()].includes(ConfigurationUtil.nodeEnv());
  }
  public static warn(message: string | string[]): string {
    let result = '';
    if (Logger.available() === true) {
      result = Logger.getMessage(message);
      Logger.updateBase();
      loggersWinston.get('app-logger').warn(result);
    }
    return result;
  }
  public static debug(message: string | string[]): string {
    let result = '';
    if (Logger.available() === true) {
      result = Logger.getMessage(message);
      Logger.updateBase();
      loggersWinston.get('app-logger').debug(result);
    }
    return result;
  }
  public static error(message: string | string[]): string {
    let result = '';
    if (Logger.available() === true) {
      result = Logger.getMessage(message);
      Logger.updateBase();
      loggersWinston.get('app-logger').error(result);
    }
    return result;
  }
  public static info(message: string | string[]): string {
    let result = '';
    if (Logger.available() === true) {
      result = Logger.getMessage(message);
      Logger.updateBase();
      loggersWinston.get('app-logger').info(result);
    }
    return result;
  }
  public static separator(): string {
    let result = '';
    if (Logger.available() === true) {
      result = '*****';
      console.log(result);
    }
    return result;
  }
  private static getMessage(message: undefined | string | string[]): string {
    let result = '';
    if (message) {
      if (typeof message === 'string') {
        message = message.trim();
        if (message.includes('|') === false) {
          result = message;
        } else {
          result = Logger.getMessage(message.split('|'));
        }
      } else {
        for (const msg of message) {
          const m = Logger.getMessage(msg);
          if (m !== '') {
            if (result === '') {
              result = m;
            } else {
              result = `${result} | ${m}`;
            }
          }
        }
      }
    }
    return result;
  }
}
