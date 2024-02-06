/// <reference types="cypress" />
describe('Working with pinjaman',() =>{
    beforeEach('Visit the login page', () => {
        cy.visit('/login');
        cy.url().should('include', 'primkoppolkuningan.my.id')
        cy.login('00028001', '12345');
      })

      it('Go to pinjaman page', () => {
        cy.get('.justify-content-between > .bi').click()
        cy.get('#sidebar-nav > :nth-child(3) > .nav-link').click()
        cy.get('.card').should('exist')
        cy.get('.btntambah').should('contain.text','Pengajuan Pinjaman').click()
        cy.fixture('samples').then((samples)=>{
          const randonPinjaman = samples.listPinjaman[Math.floor(Math.random() * samples.listPinjaman.length)]
          const randomAmount = Math.floor(Math.random()*10000000)+10000
          const randonBulan = samples.listBulan[Math.floor(Math.random() * samples.listBulan.length)]
          cy.get(':nth-child(4) > :nth-child(2) > .form-control').select(randonPinjaman)
          cy.get(':nth-child(5) > :nth-child(2) > .form-control').type("10000000")
          cy.get(':nth-child(6) > :nth-child(2) > .form-control').type('Gatau buat apa')
          cy.get(':nth-child(7) > :nth-child(2) > .form-control').select(randonBulan)
          cy.get('.btn').click()
          cy.get('.alert-primary').should('contain.text',"Input Pengajuan Pinjaman Berhasill").and("exist")
          cy.get('#alertKonfirmasi').should('contain.text',"Anda Sedang Tidak Dapat Meminjam, Silahkan Konfirmasi Terlebih Dahulu!").and("exist")
        })
      });
    });