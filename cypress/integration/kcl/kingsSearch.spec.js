describe("King's Search", function(){

    it('English Search Term', function() {
        cy.visit("https://www.kcl.ac.uk/search/search#/courses?term=english&level=5087")
            cy.get('.cb-enable').click({ force: true})
            cy.wait(3000)
            cy.contains('Courses').should('be.visible').click()
            cy.wait(3000)
            cy.contains('All Results').should('be.visible').click()
            cy.wait(3000)
            cy.contains('News').should('be.visible').click()
            cy.wait(3000)
            cy.get('a[href="https://kclpure.kcl.ac.uk/portal/en/search.html?searchall=english"]').click()       
  })



})