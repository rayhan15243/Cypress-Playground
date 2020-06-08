describe("Teaching and structure tab", function(){

    it('Assessment text field', function() {
        cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/courses/english-test")
        cy.contains('Teaching & structure').should('be.visible').click({ force: true})
        cy.contains('Assessment').should('be.visible')
        cy.contains('Teaching methods').should('be.visible')
        cy.contains('Learning outcomes').should('be.visible')
      //cy.contains('Structure').should('be.visible')
        cy.contains('Required modules').should('be.visible')
        cy.contains('Optional modules').should('be.visible')
    })



})

