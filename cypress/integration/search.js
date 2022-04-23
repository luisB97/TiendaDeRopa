/// <reference types="cypress" />

describe('Search elements', () => {
    
    beforeEach(() => {
        cy.visit('');
    })
    
    it('Search for elements with multiple results', () => {
        cy.search('dress')

        cy.fixture('searchResult').then((response) => {
            cy.get(response.title).should('contain', 'dress')
        })
    })

    it('Search for elements with no results', () => {
        cy.search('Sin resultados')

        cy.fixture('searchResult').then((response) => {
            cy.get(response.alert).should('contain', 'No results were found for your search')
        })
    })

    it('Search for elements with special code', () => {
        cy.readFile('cypress/support/text/search.txt').then((text) => {
            cy.search(text)
        })

        cy.fixture('searchResult').then((response) => {
            cy.get(response.alert).should('contain', 'No results were found for your search')
        })
    })
})