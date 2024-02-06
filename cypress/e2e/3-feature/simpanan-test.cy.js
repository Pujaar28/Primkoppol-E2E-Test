/// <reference types="cypress" />
describe('Working with simpanan',() =>{
    beforeEach('Visit the login page', () => {
        cy.visit('/login');
        cy.url().should('include', 'primkoppolkuningan.my.id')
        cy.login('00028001', '12345');
      });
    
      it('Go to simpanan page', () => {
        cy.get('.justify-content-between > .bi').click()
        cy.get('#sidebar-nav > :nth-child(2) > .nav-link').click()
        cy.get('[href="/simpanan-anggota"]').should('exist').and('contain.text','')
        cy.get('.btnsetorsimpanan').should('exist').and('contain.text','Setor Simpanan')
        cy.get('.btnsetorsimpanan').click()
        cy.get('.card').should('exist')
        cy.get(':nth-child(4) > :nth-child(2) > .form-control').should('exist')
      });

      it('Checking store savings simpanan feature', () => {
        cy.visit('/simpanan-anggota')
        cy.get('.btnsetorsimpanan').click()
        cy.fixture('samples').then((samples)=>{
          const randomSimpanan = samples.listSimpanan[Math.floor(Math.random() * samples.listSimpanan.length)]
          const randomAmount = Math.floor(Math.random()*90000)+10000
          cy.get(':nth-child(4) > :nth-child(2) > .form-control').select(randomSimpanan)
          cy.get(':nth-child(6) > :nth-child(2) > .form-control').type(randomAmount)
          cy.get('.btn').click()
        
        })
        cy.get('#alertKonfirmasi').should('contain.text','').and('exist')
      });

      it('Checking Withdraw simpanan feature', () => {
        cy.visit('/simpanan-anggota')
      });
    });