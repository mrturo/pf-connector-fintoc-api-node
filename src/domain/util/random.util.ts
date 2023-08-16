import { v4 as uuidv4 } from 'uuid';

export class Random {
  public static get(
    id: number | string | undefined | null = undefined
  ): string {
    return new Random(id).id;
  }
  private _id!: string;
  constructor(id: number | string | undefined | null = undefined) {
    this.id = id;
  }
  public get id(): string {
    return this._id;
  }
  private set id(value: number | string | undefined | null) {
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      this._id = uuidv4();
    } else if (typeof value !== 'string') {
      this._id = value.toString().trim();
    } else {
      this._id = value.trim();
    }
  }
}
