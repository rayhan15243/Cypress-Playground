describe("Global Nav Main", function(){

 it('Key Nav', function() {
        cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/subject-area/physics")
            cy.contains('Study').should('be.visible')
            cy.contains('Student services').should('be.visible')
            cy.contains('Research & Innovation').should('be.visible')
            cy.contains('Our faculties').should('be.visible')
            cy.contains('About King\'s').should('be.visible')
            
  })

  it('Key Nav Clicked', function() {
    cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/subject-area/physics")
        cy.contains('Study').click()
        cy.go('back')
        cy.contains('Student services').click()
        cy.go('back')
        cy.contains('Research & Innovation').click()
        cy.go('back')
        cy.contains('Our faculties').click()
        cy.go('back')
        cy.contains('About King\'s').click()
        cy.go('back')
})

  it('Hover Drop Down', function() {
    cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/subject-area/physics")
            cy.contains('Study').trigger('mouseover')
            cy.contains('Student services').trigger('mouseover')
            cy.contains('Research & Innovation').trigger('mouseover')
            cy.contains('Our faculties').trigger('mouseover')
            cy.contains('About King\'s').trigger('mouseover')
}) 


it('Secondary Nav Visible', function() {
    cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/subject-area/physics")
    cy.contains('Undergraduate').should('be.visible'),{ force: true}
    cy.contains('Postgraduate').should('be.visible'),{ force: true}
    cy.contains('More courses').should('be.visible'),{ force: true}
    cy.contains('International').should('be.visible'),{ force: true}
    cy.contains('Why King\’s').should('be.visible'),{ force: true}
    cy.contains('Accommodation').should('be.visible'),{ force: true}
    cy.contains('Student life').should('be.visible'),{ force: true}
    cy.contains('Visit King\’s').should('be.visible'),{ force: true}
}) 

it('Secondary Nav Clicked', function() {
    cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/subject-area/physics")
    cy.contains('Undergraduate').click(),{ force: true}
    cy.go('back')
    cy.contains('Postgraduate').click(),{ force: true}
    cy.go('back')
    cy.contains('More courses').click(),{ force: true}
    cy.go('back')
    cy.contains('International').click(),{ force: true}
    cy.go('back')
    cy.contains('Why King\’s').click(),{ force: true}
    cy.go('back')
    cy.contains('Accommodation').click(),{ force: true}
    cy.go('back')
    cy.contains('Student life').click(),{ force: true}
    cy.go('back')
    cy.contains('Visit King\’s').click(),{ force: true}
    
}) 





})