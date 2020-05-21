describe("CMS Upgrade Test", function(){

  it('Successful Login', function() {
    
    cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
    cy.get('#_Textbox_Username').type('rayhantest', { force: true, log: false})
   // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
    cy.get('#_Textbox_Password').type('Password1', { force: true, log: false })
    cy.get('#ctl35').click({ force: true})
    // cy.get('form').submit()
   

 
})

it('Invalid Username', function() {
    
  cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
  cy.get('#_Textbox_Username').type('rayhantestt', { force: true, log: false})
 // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
 cy.get('#_Textbox_Password').type('Password1', { force: true, log: false })
  cy.get('#ctl35').click({ force: true})
  // cy.get('form').submit()
 
})

it('Invalid Password', function() {
    
  cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
  cy.get('#_Textbox_Username').type('rayhantest', { force: true, log: false})
 // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
 cy.get('#_Textbox_Password').type('Password11', { force: true, log: false })
  cy.get('#ctl35').click({ force: true})
  // cy.get('form').submit()
 
})


it('Logout', function() {
      cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
      cy.get('#_Textbox_Username').type('rayhantest', { force: true, log: false})
      // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
      cy.get('#_Textbox_Password').type('Password1', { force: true, log: false })
      cy.get('#ctl35').click({ force: true})
      // cy.get('form').submit()
  
      cy.get('#UI_UserToolbar_CurrentUser_hyperlink').click({ force: true})
   
      cy.get('#cm_logout_item').click({ force: true})
     
 })

 



 it('Login Session Inactive Back Button', function() {
  cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
  cy.get('#_Textbox_Username').type('rayhantest', { force: true, log: false})
  // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
  cy.get('#_Textbox_Password').type('Password1', { force: true, log: false })
  cy.get('#ctl35').click({ force: true})
  // cy.get('form').submit()
 
  cy.get('#UI_UserToolbar_CurrentUser_hyperlink').click({ force: true})

  cy.get('#cm_logout_item').click({ force: true})

  cy.go('back') 


  

})



})
