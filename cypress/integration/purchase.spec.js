/// <reference types="cypress" />

context('Purchase', () => {
  it('should purchase a product', () => {
    cy.setCookie(
      'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
      '4UuVr9Uthq9JVegYBFrqV6ZOuzPrDaj4jI32LsB%2FR7YV0WC5xCqFhC8DtRks17wvHoiCHH%2BYiJItLL%2FwZ%2FJUENQCMvN1PiWNVjipU7WAhP4Wrr3i%2BGPdQoKDdGfBieiIENJ1SfimgRzORcDF3OP5AW7gVNrF4os7XSrM4o0VIvhCjnrvvphzH9SBrWA12fFTnuNWYSL5OoRFktc7ZF0Rr2iJBbb40kPQ2BoUfpA6LoLFINBQzStZNQ8SEoBlcKNALumglTFUhriJUNZstm5tKL%2B4mCx%2BQU6bNBNOJ%2Fs7kqMM3%2Fsh2QPxlXviL7WjIbRVOMTistCYHnxbAgj3km3D9xj3exQpBQE4FGGHDN5qjibJbH1V%2FPYvHjePy0f6h3Y2Ly%2Ff2IzhDTfbwSKL7BneRQt2rZ1kzmO5i3sjnpSiEwd%2Fy79EZ7Iu34uc%2BSX%2BcgT0000329'
    );

    cy.visit('/');

    const productName = 'Faded Short Sleeve T-shirts';

    cy.contains(productName).trigger('mouseover');

    cy.contains(productName)
      .parent()
      .siblings('div.button-container')
      .children('a')
      .first()
      .click();

    cy.get('.icon-ok')
      .parent()
      .should(
        'contain.text',
        'Product successfully added to your shopping cart'
      );

    cy.get('span#layer_cart_product_title').should('contain.text', productName);

    cy.get('.button-container a[href$="controller=order"]').click();

    cy.get('.cart_navigation a[href$="order&step=1"]').click();

    // cy.get('#email').type('semana-agilizei@mail.com');
    // cy.get('#passwd').type('12345');

    // cy.get('button#SubmitLogin').click();

    cy.get('[type=checkbox]#addressesAreEquals').should(
      'have.attr',
      'checked',
      'checked'
    );

    cy.get('[type=checkbox]#addressesAreEquals').should(
      'have.attr',
      'name',
      'same'
    );

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

    cy.get('div.box')
      .invoke('text')
      .then((text) => {
        cy.writeFile('cypress/fixtures/order.json', {
          id: `${text.match(/[A-Z][A-Z]+/g)[1]}`,
        });
      });

    cy.get('.cart_navigation a[href$="history"]').click();

    cy.readFile('cypress/fixtures/order.json').then((order) => {
      cy.get('tr.first_item td.history_link a').should(
        'contain.text',
        order.id
      );
    });
  });
});
