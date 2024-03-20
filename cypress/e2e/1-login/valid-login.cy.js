/// <reference types="cypress" />


describe('Valid Login Functionality',() =>{
    it('should login successfully', () => {
    cy.visit('https://primkoppolkuningan.my.id');
    cy.get(':nth-child(4) > .nav-link').should('contain.text','Login').click()
    cy.url().should('include', '/login')
    cy.get(':nth-child(2) > .form-control').type('00028001')
    cy.get(':nth-child(3) > .form-control').type('12345')
    cy.get(':nth-child(1) > .btn').click()
    cy.url().should('include',('/dashboard'))
    });
});