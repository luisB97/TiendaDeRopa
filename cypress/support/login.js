Cypress.Commands.add('login', (email, password) => {
    cy.fixture('../fixtures/login/login.json').then((response) => {
        cy.get(response.loginLink).click()
        cy.get(response.email).type(email)
        cy.get(response.password).type(password)
        cy.get(response.loginButton).click()
    })
})