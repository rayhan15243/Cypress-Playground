describe("Warning Banner", function(){

    it('AC3 Default fee', function() {
        cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/english-test")
            cy.contains('Fees & Funding').should('be.visible').click()
            cy.contains('£9250').should('be.visible')
  })

  it('AC7 Generic Funding', function() {
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/english-test")
        cy.contains('Fees & Funding').should('be.visible').click()
        cy.contains('Funding').should('be.visible')
})

})