/// <reference types="cypress" />
describe('Invalid Login', () => {
    it('Checking login alert information if username or password alert wrong', () => {
        cy.visit('https://primkoppolkuningan.my.id/login');
        cy.url().should('include', '/login') 
        cy.get(':nth-child(2) > .form-control').type('000280011')
        cy.get(':nth-child(3) > .form-control').type('12345')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('.card-body > .alert').should('contain.text','Username Atau Password Salah')
        cy.get(':nth-child(2) > .form-control').type('00028001')
        cy.get(':nth-child(3) > .form-control').type('123456')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('.card-body > .alert').should('contain.text','Username Atau Password Salah')
    });
  });