/// <reference types="cypress" />

context('Purchase', () => {
  it('should purchase a product', () => {
    cy.visit('/');

    cy.contains('Faded Short Sleeve T-shirts').trigger('mouseover');

    cy.contains('Faded Short Sleeve T-shirts')
      .parent()
      .siblings('div.button-container')
      .children('a')
      .first()
      .click();

    cy.get(".button-container a[href$='controller=order']").click();

    cy.get(".cart_navigation a[href$='order&step=1']").click();

    cy.get('#email').type('semana-agilizei@mail.com');
    cy.get('#passwd').type('12345');

    cy.get('button#SubmitLogin').click();

    // [type=checkbox]#addressesAreEquals

    cy.get('button[name=processAddress]').click();

    cy.get('[type=checkbox]#cgv').check();

    cy.get('button[name=processCarrier]').click();

    cy.get('.bankwire').click();

    cy.get('.cart_navigation button[type=submit]')
      .find('span')
      .contains('I confirm my order')
      .click();

    cy.get('.cheque-indent strong').should(
      'contain.text',
      'Your order on My Store is complete.'
    );
  });
});
