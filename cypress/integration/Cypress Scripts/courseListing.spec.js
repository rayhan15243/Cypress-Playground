describe("WEBR-3920 - Course Listing", function(){

    it('Undergraduate', function() {
        cy.visit("http://dev.preview.kcl.contensis.cloud/preview/31d3908d-3806-49ae-a4a2-cf41562fe4f5")
        cy.contains('Undergraduate courses').should('be.visible')
        cy.contains('Physics BSc').should('be.visible')
        cy.contains('Full time').should('be.visible')
        cy.contains('Physics BSc').should('be.visible').click()
        cy.contains('Physics MSc').should('be.visible').click()
        cy.go('back') 
        cy.contains('Physics with a year abroad BSc').should('be.visible').click()
        cy.go('back') 
        cy.contains('Physics with Astrophysics and Cosmology MSci').should('be.visible').click()
        cy.go('back') 
        cy.contains('Postgraduate courses').should('be.visible')
    })

   


})