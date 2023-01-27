describe ('Google Feature', function(){


    it('Test1', function(){
    
        cy.visit('https://www.google.co.uk/')
        cy.get('[title="Search"]').type('morpho{Enter}')
        cy.get('[href="https://en.wikipedia.org/wiki/Morpho"]').should('exist')
    
    
    
    })
    })