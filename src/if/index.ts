export class If {
  constructor(private currentValue: any, private currentState = true) {}

  public static of(value: any): If {
    return new If(value);
  }

  public check(): boolean {
    return this.currentState;
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
}
