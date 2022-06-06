/* eslint-disable @typescript-eslint/ban-types */
export class Match {
  constructor(
    private currentValue: any,
    private valuesToMatch: any[] = [],
    private functionsToExecute: Function[] = [],
    private defaultFunction?: Function,
  ) {}

  public static of(currentValue: any): Match {
    return new Match(currentValue);
  }

  public case(value: any, functionToExecute: Function): Match {
    const copyOfValues = [...this.valuesToMatch];
    copyOfValues.push(value);
    const copyOfFunctions = [...this.functionsToExecute];
    copyOfFunctions.push(functionToExecute);

    return new Match(this.currentValue, copyOfValues, copyOfFunctions);
  }

  public caseDefault(defaultFunction: Function): Match {
    return new Match(
      this.currentValue,
      [...this.valuesToMatch],
      [...this.functionsToExecute],
      defaultFunction,
    );
  }

  public async check(): Promise<any> {
    for (let i = 0; i < this.valuesToMatch.length; i++) {
      const valueToTest = this.valuesToMatch[i];
      const functionToTest = this.functionsToExecute[i];

      if (
        typeof valueToTest === 'function' &&
        valueToTest(this.currentValue) &&
        functionToTest
      ) {
        return await functionToTest(this.currentValue);
      }

      if (valueToTest === this.currentValue && functionToTest) {
        return await functionToTest(this.currentValue);
      }
    }

    if (this.defaultFunction) {
      return await this.defaultFunction(this.currentValue);
    }

    return undefined;
  }
}
