describe("Verify Title", function(){

    it('Sign in', function() {
        cy.visit("http://dev.preview.kcl-dev.contensis.cloud/study/undergraduate/courses/english")
        //  cy.location('protocol').should('eq', 'https:')
        cy.contains('Course Aims').should('be.visible')
       // cy.go(-1) cy.go(back)
       // cy.go(1) cy.go(forward()

    })

    /*
it('System Diagnostics Scan Report', function() {
    
  cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
  cy.get('#_Textbox_Username').type('rayhantest', { force: true })
 // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
  cy.get('#_Textbox_Password').type('Password1', { force: true })
  cy.get('#ctl35').click({ force: true})
 // cy.get('form').submit()
  cy.wait(5000)
  cy.get('#management-toggle').click({ force: true})
  cy.wait(2000)
  cy.get('#ScanSystem').click({ force: true})
  cy.wait(10000)


})

it('Permissions', function() {
    
  cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
  cy.get('#_Textbox_Username').type('rayhantest', { force: true })
 // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
  cy.get('#_Textbox_Password').type('Password1', { force: true })
  cy.get('#ctl35').click({ force: true})
  cy.wait(5000)
  cy.get('#management-toggle').click({ force: true})
  cy.wait(5000)
  cy.get('#UserManagement').click({ force: true})
  cy.wait(5000)


})


  it('KCL Internal', function() {
  
        cy.clearLocalStorage()
        cy.clearCookies()

        cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
        cy.get('#_Textbox_Username').type('rayhantest', { force: true })
        cy.get('#_Textbox_Password').type('Password1', { force: true })
        cy.get('#ctl35').click({ force: true})

        cy.get('#projects-toggle > .icon-dark').click({ force: true})
        cy.wait(5000)
        cy.get('#projectText-2').click({ force: true})
        cy.wait(20000)
        cy.get('#W124261').click({ force: true})
        cy.wait(25000)
        cy.get('#cm_previewpopup_item').click({ force: true})
        cy.wait(20000)   
})


it('KCL External', function() {
        cy.clearLocalStorage()
        cy.clearCookies()

        cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
        cy.get('#_Textbox_Username').type('rayhantest', { force: true })
        cy.get('#_Textbox_Password').type('Password1', { force: true })
        cy.get('#ctl35').click({ force: true})

        cy.get('#projects-toggle > .icon-dark').click({ force: true})
        cy.wait(5000)
        cy.get('#projectText-1').click({ force: true})
        cy.wait(20000)
        cy.get('#EF34944').click({ force: true})
        cy.wait(20000)
        cy.get('#W157124').click({ force: true})
        cy.wait(25000)
        cy.get('#cm_previewpopup_item').click({ force: true})
        cy.wait(20000)   

  
})

it('KingsVenue', function() {
  cy.clearLocalStorage()
  cy.clearCookies()

  cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
  cy.get('#_Textbox_Username').type('rayhantest', { force: true })
  cy.get('#_Textbox_Password').type('Password1', { force: true })
  cy.get('#ctl35').click({ force: true})

  cy.get('#projects-toggle > .icon-dark').click({ force: true})
  cy.wait(5000)
  cy.get('#projectText-5').click({ force: true})
  cy.wait(20000)
  cy.get('#W136711').click({ force: true})
  cy.wait(25000)
  cy.get('#cm_previewpopup_item').click({ force: true})
  cy.wait(20000)   


})




it('Page in Test Live', function() {
    
  cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
  cy.get('#_Textbox_Username').type('rayhantest', { force: true })
 // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
  cy.get('#_Textbox_Password').type('Password1', { force: true })
  cy.get('#ctl35').click({ force: true})
  cy.get('#projects-toggle > .icon-dark').click({ force: true})
  cy.wait(5000)
  cy.get('#projectText-1').click({ force: true})
  cy.wait(20000)
  cy.get('#W152538').click({ force: true})
  cy.wait(25000)
  cy.get('#cm_preview_item').click({ force: true})
  cy.wait(5000)
  cy.get('#contextmenu_preview_link').click({ force: true})
  cy.wait(5000)
  cy.get('#cm_previewlivepopup_item').click({ force: true})
  cy.wait(20000)


})

it('Page in Test Preview', function() {
    
  cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
  cy.get('#_Textbox_Username').type('rayhantest', { force: true })
 // cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
  cy.get('#_Textbox_Password').type('Password1', { force: true })
  cy.get('#ctl35').click({ force: true})
  cy.wait(20000)
  cy.get('#projectText-1').click({ force: true})
  cy.wait(20000)
  cy.get('#W152538').click({ force: true})
  cy.wait(25000)
  cy.get('#cm_preview_item').click({ force: true})
  cy.wait(5000)
  cy.get('#contextmenu_preview_link').click({ force: true})
  cy.wait(5000)
  cy.get('#cm_previewtestpopup_item').click({ force: true})
  cy.wait(20000)

})

*/

})

