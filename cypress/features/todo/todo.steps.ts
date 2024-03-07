import { Given, Then, When } from '../../support/extend.word';

Given('I access to example to-do app page', function () {
    cy.visit('https://example.cypress.io/todo')
  });
  
When('Displays two todo items by default', function () {
    cy.get('.todo-list li').should('have.length', 2);
});

Then('I can add new todo items', function () {
    const newItem = 'Feed the cat'
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
});

Then('I can check off an item as completed', function () {
    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()
    
    cy.contains('Pay electric bill')
    .parents('li')
    .should('have.class', 'completed')
});

