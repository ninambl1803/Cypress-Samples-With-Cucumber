// this is example, you can delete this file

import { BasePage } from './base.page';

class LoginPage extends BasePage {
  visit() {
    return cy.intercept('GET', '/api/auth/session').as('getSession').visit('/login').wait('@getSession');
  }

  btnSigninWithGoogle() {
    return cy.get('button').contains('Sign in with Google');
  }
}

export default new LoginPage();