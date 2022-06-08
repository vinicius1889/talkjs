/* eslint-disable @typescript-eslint/ban-types */
export class If {
  constructor(
    private currentValue: any,
    private currentState = true,
    private _successFunction?: Function,
    private _failFunction?: Function,
  ) {}

  public static of(value: any): If {
    return new If(value);
  }

  public check(): boolean {
    return this.currentState;
  }

  public checkAndExecute(): any {
    return this.currentState ? this.executeSuccess() : this.executeFail();
  }

  public is(valueToMatch?: any): If {
    if (typeof valueToMatch === 'function') {
      return new If(
        this.currentValue,
        valueToMatch(this.currentValue) && this.currentState,
      );
    }

    return new If(
      this.currentValue,
      valueToMatch === this.currentValue && this.currentState,
    );
  }

  public or(valueToMatch?: any): If {
    if (typeof valueToMatch === 'function') {
      return new If(
        this.currentValue,
        valueToMatch(this.currentValue) || this.currentState,
      );
    }

    return new If(
      this.currentValue,
      valueToMatch === this.currentValue || this.currentState,
    );
  }

  public not(): If {
    return new If(this.currentValue, !this.currentState);
  }

  private executeSuccess(): any {
    return this._successFunction!(this.currentValue);
  }

  private executeFail(): any {
    return this._failFunction!(this.currentValue);
  }

  public onSuccess(successFunction: Function): If {
    return new If(
      this.currentValue,
      this.currentState,
      successFunction,
      this._failFunction,
    );
  }

  public onFail(failFunction: Function): If {
    return new If(
      this.currentValue,
      this.currentState,
      this._successFunction,
      failFunction,
    );
  }
}
