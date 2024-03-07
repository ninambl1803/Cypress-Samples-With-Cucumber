import { beforeEach } from 'mocha';
import { Context as MochaContext } from 'mocha';

interface ScenarioVariableWorld {
  getVariable(name: string): any;
  setVariable(name: string, value: any): void;
  resolveVariables(args: unknown[]): unknown[];
}

declare namespace Mocha {
  interface Context extends ScenarioVariableWorld, MochaContext {}
}

beforeEach(function () {
  Object.assign(this, {
    _internalVariables: new Map<string, any>(),

    getVariable(name: string) {
      if (!this._internalVariables.has(name)) {
        expect(this._internalVariables.has(name), `Variable ${name} is not exist`).to.be.true;
      }

      return this._internalVariables.get(name);
    },

    setVariable(name: string, value: any): void {
      if (name.startsWith('>>$')) {
        name = name.replace('>>$', '$');
      }

      this._internalVariables.set(name, value);
    },

    resolveVariables(args: unknown[]): unknown[] {
      const resolvedArgs = [...args];
      for (let i = 0; i < args.length; i++) {
        resolvedArgs[i] = this.resolveVariable(args[i]);
      }

      return resolvedArgs;
    },

    resolveVariable(value: any): any {
      if (value && typeof value === 'string') {
        const trimmedValue = value.trim();
        if (trimmedValue.startsWith('$')) {
          return this.getVariable(trimmedValue);
        }
      }

      return value;
    },
  });
});