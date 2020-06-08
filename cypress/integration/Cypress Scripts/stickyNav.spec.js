describe("Sticky Nav", function(){

    it('Sections', function() {
        cy.visit("http://storybook.develop.kcl.contensis.cloud/iframe.html?id=components-stickynav--with-scroll-to#section-1")
            cy.contains('Section 1').should('be.visible').click()
            cy.contains('Section 2').should('be.visible').click()
            cy.contains('Section 3').should('be.visible').click()
            cy.contains('Section 4').should('be.visible').click()
            cy.contains('Section 5').should('be.visible').click()
            cy.contains('Section 6').should('be.visible').click()
            
  })

 

})