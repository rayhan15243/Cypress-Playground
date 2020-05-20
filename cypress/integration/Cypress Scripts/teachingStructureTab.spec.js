describe("Teaching and structure tab", function(){

    it('Assessment text field', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Teaching & structure').should('be.visible').click()
        cy.contains('Assessment').should('be.visible')

    })

    it('Teaching text', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Teaching & structure').should('be.visible').click()
        cy.contains('Teaching methods').should('be.visible')

    })

})

