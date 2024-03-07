import { defineStep } from '@badeball/cypress-cucumber-preprocessor';
import { IStepDefinitionBody } from '@badeball/cypress-cucumber-preprocessor/public-member-types';

export function extendDefineStep<T extends unknown[], C extends Mocha.Context>(
  description: string | RegExp,
  implementation: IStepDefinitionBody<T, C>,
): void {
  defineStep(description, function (this: C, ...args: T) {
    return implementation.apply(this, this.resolveVariables(args) as T);
  });
}

export { extendDefineStep as Given, extendDefineStep as When, extendDefineStep as Then };