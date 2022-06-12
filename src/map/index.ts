export class Map {
  private _object: Record<string, any>;
  constructor(object: Record<string, any>) {
    this._object = Object.assign({}, object);
    this._object = Object.seal(this._object);
    this._object = Object.freeze(this._object);
  }

  public has(property: string): boolean {
    return Object.keys(this._object).includes(property);
  }

  public getOr<T>(property: string, defaultValue: any): T {
    if (this.has(property)) return this._object[property] as T;

    return defaultValue;
  }

  public set(property: string, value: any): Map {
    const toUpdate = { ...this._object };
    Reflect.set(toUpdate, property, value);
    return new Map({ ...toUpdate });
  }

  public toJs<T>(): T {
    return { ...this._object } as T;
  }

  public keys(): string[] {
    return Object.keys(this._object);
  }
}
