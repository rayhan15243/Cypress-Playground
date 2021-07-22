describe("BODS Internal Homepage", function(){

    it('BODS Internal First Page', function() {
        cy.visit("https://bodp-internal.itoworld.com/")
        cy.get(':nth-child(1) > .govuk-list > :nth-child(1) > .govuk-link-bold')
        .click({ force: true})
        cy.get('.govuk-grid-column-two-thirds > .govuk-button')
        .click({ force: true})            
  })
})