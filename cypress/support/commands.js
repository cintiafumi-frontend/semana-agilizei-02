// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () => {
  cy.setCookie(
    'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
    '4UuVr9Uthq9JVegYBFrqV6ZOuzPrDaj4jI32LsB%2FR7YV0WC5xCqFhC8DtRks17wvHoiCHH%2BYiJItLL%2FwZ%2FJUENQCMvN1PiWNVjipU7WAhP4Wrr3i%2BGPdQoKDdGfBieiIENJ1SfimgRzORcDF3OP5AW7gVNrF4os7XSrM4o0VIvhCjnrvvphzH9SBrWA12fFTnuNWYSL5OoRFktc7ZF0Rr2iJBbb40kPQ2BoUfpA6LoLFINBQzStZNQ8SEoBlcKNALumglTFUhriJUNZstm5tKL%2B4mCx%2BQU6bNBNOJ%2Fs7kqMM3%2Fsh2QPxlXviL7WjIbRVOMTistCYHnxbAgj3km3D9xj3exQpBQE4FGGHDN5qjibJbH1V%2FPYvHjePy0f6h3Y2Ly%2Ff2IzhDTfbwSKL7BneRQt2rZ1kzmO5i3sjnpSiEwd%2Fy79EZ7Iu34uc%2BSX%2BcgT0000329'
  );
});
