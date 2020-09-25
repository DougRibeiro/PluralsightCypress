///  <reference types="Cypress"/>

describe('My First Test Suite' , () =>{
    it('test url works', () => {
        cy.visit('http://localhost:4100')
    });
    it('test signup exists', () => {
        cy.contains('a.nav-link','Sign up').click()
    });
})