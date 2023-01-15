describe("Google Test", function(){

    it('Google Search', function() {
        cy.visit('https://www.google.com') 
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('.gLFyf').type('Hello World{Enter}') 
        cy.wait(3000)
        cy.contains('News').click()
    })
})