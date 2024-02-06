/// <reference types="cypress" />


describe('Working with login form',() =>{
    beforeEach('Visit the login page', () => {
        cy.visit('https://primkoppolkuningan.my.id/login');
        cy.url().should('include', '/login')
      });

    it('Should contain login form', () => {
        cy.get('.card-body').should('exist')
        cy.get(':nth-child(2) > .form-control').should('exist')
        cy.get(':nth-child(3) > .form-control').should('exist')
        cy.get(':nth-child(1) > .btn').should('exist')
        cy.get('#btn-cancel').should('exist')
        cy.get(':nth-child(4) > .col-lg-12').should('exist')
        cy.get('.col-lg-12 > .text-monospace').should('exist')
    });

    it('Checking login alert information if username or password alert wrong', () => {
        cy.get(':nth-child(2) > .form-control').type('000280011')
        cy.get(':nth-child(3) > .form-control').type('12345')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('.card-body > .alert').should('contain.text','Username Atau Password Salah')
        cy.get(':nth-child(2) > .form-control').type('00028001')
        cy.get(':nth-child(3) > .form-control').type('123456')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('.card-body > .alert').should('contain.text','Username Atau Password Salah')
    });

    it('Should try login', () => {
        cy.get(':nth-child(2) > .form-control').type('00028001')
        cy.get(':nth-child(3) > .form-control').type('12345')
        cy.get(':nth-child(1) > .btn').click()
        cy.url().should('include',('/dashboard'))
    });
});