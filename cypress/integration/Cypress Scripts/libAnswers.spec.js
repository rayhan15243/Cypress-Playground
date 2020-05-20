describe("Lib Answers", function(){

    it('Search', function() {
        cy.visit("https://libanswers.kcl.ac.uk/")

        cy.get('#s-la-content-search-query-46776').type('returns')
        
        cy.get('form').submit()
        
        cy.get('#s-la-content-search-query-46776').clear() 
        
        cy.get('#s-la-content-search-query-46776').type('books')
        
        cy.get('form').submit()

        cy.get('#s-la-content-search-query-46776').clear()
        
        cy.get('#s-la-content-search-query-46776').type('nhs')
       
        cy.get('form').submit()
            
  })

  it('Main Nav Links', function() {
    cy.get('.header__logo').click()
  
    cy.visit("https://libanswers.kcl.ac.uk/")
   
    cy.contains('Library').should('be.visible').click()
    
    cy.visit("https://libanswers.kcl.ac.uk/")
    cy.contains('LibAnswers').should('be.visible').click()
    
    cy.visit("https://libanswers.kcl.ac.uk/")
    cy.contains('Main website').should('be.visible').click()
    
    cy.visit("https://libanswers.kcl.ac.uk/")
    cy.contains('Library Search').should('be.visible').click()
    
        
})

it('Drop Downs', function() {
    cy.visit("https://libanswers.kcl.ac.uk/")
    
    cy.contains('Answers').should('be.visible').click()
   
    cy.get('#s-la-page-title-bar-topics').click()
    cy.contains('Archives').should('be.visible').click()
   
    cy.get('#s-la-page-title-bar-topics').click()
    cy.contains('Borrowing').should('be.visible').click()
    
    cy.get('#s-la-page-title-bar-topics').click()
    cy.contains('Copyright & Teaching').should('be.visible').click()
    
    cy.get('#s-la-page-title-bar-topics').click()
    cy.contains('Copyright basics').should('be.visible').click()
  
    cy.get('#s-la-page-title-bar-topics').click()
    cy.contains('eresources').should('be.visible').click()
    
    cy.get('#s-la-page-title-bar-topics').click()
    cy.contains('Joining the library').should('be.visible').click()
  
    cy.get('#s-la-page-title-bar-topics').click()
    cy.contains('Noise').should('be.visible').click()
  
    cy.get('#s-la-page-title-bar-topics').click()
    cy.contains('Special Collections').should('be.visible').click()
   
    cy.get('#s-la-page-title-bar-topics').click()
    cy.contains('Using copyrighted material').should('be.visible').click()
   
    cy.get('#s-la-page-title-bar-topics').click()
    cy.contains('Your copyright').should('be.visible').click()
 

    
        
})



})