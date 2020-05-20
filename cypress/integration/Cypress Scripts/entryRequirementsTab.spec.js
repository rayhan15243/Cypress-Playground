describe("Entry Requirements tab", function(){

    it('Entry Requirements', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Entry requirements').should('be.visible').click()
        cy.contains('Required grades').should('be.visible')
        cy.contains('Required subjects').should('be.visible')
        cy.contains('Preferred subjects').should('be.visible')
      
    })

    it('Qualifications', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Entry requirements').should('be.visible').click()
        cy.get('#altQualifications').select('Australian diploma')
      
    })

    it('International Baccalaureate', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Entry requirements').should('be.visible').click()
        cy.contains('International Baccalaureate').should('be.visible')
      
    })

    it('GCSEs', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Entry requirements').should('be.visible').click()
        cy.contains('GCSEs').should('be.visible')
        
    })

    it('International', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Entry requirements').should('be.visible').click()
        cy.get('#intQualifications').select('Brazil')
        cy.get('#intQualifications').select('New Zealand')
      
    })

})
