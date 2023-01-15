describe("Call to Action Component", function(){

    it('CTA', function() {
        cy.visit("http://preview.kcl.contensis.cloud/study-at-kings/your-journey-to-success-begins-at-kings")
     
       
        cy.contains('Why study geography at King\'s?').should('be.visible')
        cy.wait(4000)
        cy.contains('Sign up now').should('be.visible').click()
        cy.wait(4000)
        cy.contains('Examine').should('be.visible')
     

    })

   


})