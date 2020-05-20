describe("CMS Upgrade Test", function(){

  it('Successful Login', function() {
    
    cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
    cy.get('#_Textbox_Username').type('rayhantest', { force: true, log: false})
   // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
    cy.get('#_Textbox_Password').type('Password1', { force: true, log: false })
    cy.get('#ctl35').click({ force: true})
    // cy.get('form').submit()
    cy.wait(3000)

 
})

it('Invalid Username', function() {
    
  cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
  cy.get('#_Textbox_Username').type('rayhantestt', { force: true, log: false})
 // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
 cy.get('#_Textbox_Password').type('Password1', { force: true, log: false })
  cy.get('#ctl35').click({ force: true})
  // cy.get('form').submit()
  cy.wait(4000)
})

it('Invalid Password', function() {
    
  cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
  cy.get('#_Textbox_Username').type('rayhantest', { force: true, log: false})
 // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
 cy.get('#_Textbox_Password').type('Password11', { force: true, log: false })
  cy.get('#ctl35').click({ force: true})
  // cy.get('form').submit()
  cy.wait(4000)
})


it('Logout', function() {
      cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
      cy.get('#_Textbox_Username').type('rayhantest', { force: true, log: false})
      // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
      cy.get('#_Textbox_Password').type('Password1', { force: true, log: false })
      cy.get('#ctl35').click({ force: true})
      // cy.get('form').submit()
      cy.wait(5000)
      cy.get('#UI_UserToolbar_CurrentUser_hyperlink').click({ force: true})
      cy.wait(5000)
      cy.get('#cm_logout_item').click({ force: true})
      cy.wait(12000)
 })

 



 it('Login Session Inactive Back Button', function() {
  cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
  cy.get('#_Textbox_Username').type('rayhantest', { force: true, log: false})
  // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
  cy.get('#_Textbox_Password').type('Password1', { force: true, log: false })
  cy.get('#ctl35').click({ force: true})
  // cy.get('form').submit()
  cy.wait(5000)
  cy.get('#UI_UserToolbar_CurrentUser_hyperlink').click({ force: true})
  cy.wait(5000)
  cy.get('#cm_logout_item').click({ force: true})
  cy.wait(5000)
  cy.go('back') 
  cy.wait(5000)

  

})



})
