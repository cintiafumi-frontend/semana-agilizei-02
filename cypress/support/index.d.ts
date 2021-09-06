/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Command to execute background login
     * @example
     * cy.backgroundLogin()
     */
    backgroundLogin(): Chainable<any>;
  }
}
