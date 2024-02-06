/// <reference types="cypress" />

describe('Working with dashboard page',() =>{
    beforeEach('Visit the login page', () => {
        cy.visit('https://primkoppolkuningan.my.id/login');
        cy.url().should('include', 'primkoppolkuningan.my.id')
        cy.login('00028001', '12345');
      });

      it('Checking element exist', () => {
        cy.get('.justify-content-between > .bi').should('exist')
        cy.get('.dropdown > .nav-link').should('exist')
        cy.get('.primkoppol-logo').should('exist')
        cy.get('.card-title').should('exist')
        cy.get('.dropdown-header').should('exist')
        cy.get('.dropdown > .nav-link').click()
        cy.get(':nth-child(4) > .dropdown-item').should('exist')
        cy.get(':nth-child(5) > .dropdown-item').should('exist')
        cy.get('.justify-content-between > .bi').click()
        cy.get('#sidebar-nav').should('exist')
        cy.get('#sidebar-nav > :nth-child(2) > .nav-link').should('exist')
        cy.get(':nth-child(3) > .nav-link').should('exist')
        cy.get(':nth-child(4) > .nav-link').should('exist')
      });

      it('Checking button function', () => {
        cy.get('.dropdown > .nav-link').click()
        cy.get(':nth-child(4) > .dropdown-item').click()
        cy.get('.breadcrumb').should('exist').and('contain.text','/PROFIL USER')
        cy.go(-1)
        cy.get('.justify-content-between > .bi').click()
        cy.get('#sidebar-nav > :nth-child(2) > .nav-link').click()
        cy.get('[href="/simpanan-anggota"]').should('exist').and('contain.text','')
        cy.go(-1)
        cy.get('.justify-content-between > .bi').click()
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('[href="/pinjaman-anggota"]').should('exist').and('contain.text','')
        cy.go(-1)
        cy.get('.justify-content-between > .bi').click()
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('[href="/angsuran-anggota"]').should('exist').and('contain.text','')
        cy.go(-1)
      });

      it('Checking logout button', () => {
          cy.get('.d-none').click()
          cy.get(':nth-child(5) > .dropdown-item').click()
      });
    });
