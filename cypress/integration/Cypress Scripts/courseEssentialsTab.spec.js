describe("Course essentials tab", function(){

    it('Awarding institution(s)', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        //  cy.location('protocol').should('eq', 'https:')
        cy.contains('Awarding Institutions').should('be.visible')
       // cy.go(-1) cy.go(back)
       // cy.go(1) cy.go(forward()

    })

    it('Base campus', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Base campus').should('be.visible')
    })

    it('Strand campus', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Strand Campus').should('be.visible')
        cy.contains('River Thames').should('be.visible')
        cy.get('[alt="The Quad - Strand campus"]').should('be.visible')

    })


    it('Regulating bodies', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Regulating bodies').should('be.visible')
    

    })


    it('Partners', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Partners').should('be.visible')
    

    })

    it('Additional campuses ', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Additional campuses ').should('be.visible')
    

    })


    it('Additional locations', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Additional locations').should('be.visible')
    

    })


    it('Awarding Institutions', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        cy.contains('Awarding Institutions').should('be.visible')
    

    })


})