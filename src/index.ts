import LetterService from './letters/LetterService.js';
import InvoiceService from './invoices/InvoiceService.js';
import { IConfig, IUserConfig } from './types/config.type.js';

const MYSENDINGBOX_DEFAULT_HOST = 'https://api.mysendingbox.fr';
const MYSENDINGBOX_DEFAULT_TIMEOUT = 120_000;
const MYSENDINGBOX_DEFAULT_VERSION = '1.0.0';

class Mysendingbox {
  private config: IConfig;
  public letter: LetterService;
  public invoice: InvoiceService;

  constructor(config: IUserConfig) {
    this.config = {
      apiKey: config.apiKey,
      apiVersion: config.apiVersion || MYSENDINGBOX_DEFAULT_VERSION,
      host: config.host || MYSENDINGBOX_DEFAULT_HOST,
      timeout: config.timeout || MYSENDINGBOX_DEFAULT_TIMEOUT,
    };

    this.letter = new LetterService(this.config);
    this.invoice = new InvoiceService(this.config);
  }
}

export default Mysendingbox;
