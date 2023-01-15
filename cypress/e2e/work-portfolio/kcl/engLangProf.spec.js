import { navigate, sections } from "../../modules/engLang";

describe("English Language Proficiency", () => {
   
 
  beforeEach(() => {

    navigate()
  })

it('Sticky Nav Sections', () => {
   
    sections()
            
  })


  it('Language Selector', () => {
    
    cy.contains('Select your qualification').should('be.visible')
    cy.get('#elp')
      .select('GCSE English Language')
      .should('be.visible')
    cy.contains('Band E').should('be.visible')

            
  })


 

})