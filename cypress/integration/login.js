/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('Login with incorrect email', () => {
        cy.login('prueba', 'contraseña')
        
        cy.fixture('../fixtures/login/login.json').then((response) => {
            cy.get(response.incorrectLoginBanner).should('contain', 'Invalid email address.')
        })
    })
})