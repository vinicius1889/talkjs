/* eslint-disable @typescript-eslint/ban-types */
export class Try {
  private constructor(private evaluate: Function) {}

  public static of(evaluate: Function): Try {
    return new Try(evaluate);
  }

  public async do(): Promise<boolean> {
    try {
      await this.evaluate();

      return true;
    } catch (err) {
      return false;
    }
  }

  public async getOrElse<T, U>(defaultValue: U): Promise<T | U> {
    try {
      const result = await this.evaluate();

      return result as T;
    } catch (err) {
      return defaultValue as U;
    }
  }
}
