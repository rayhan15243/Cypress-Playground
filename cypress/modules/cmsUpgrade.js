 //cy.get('#ctl35').click({ force: true})
 // cy.get('form').submit()

export function navigate() {
      // cy.visit("https://cms-kcl-test.cloud.contensis.com/Default.aspx/#")
      cy.visit("https://cms-kcl-dev.cloud.contensis.com/Default.aspx")
}

export function emptyUsername() {
   cy.get('#_Textbox_Password').type('Password1{enter}', { force: true, log: false })
   cy.contains('required field')
}


export function emptyPassword() {
    cy.get('#_Textbox_Username').type('rayhantest{enter}', { force: true, log: false})
    cy.contains('Password is a required field')
}

export function emptyUserPassFields() {
    cy.get('#ctl35').click({ force: true})
    cy.contains('required field')
}


export function successfulLogin() {

    cy.get('#_Textbox_Username').type('rayhantest', { force: true, log: false})
    cy.get('#_Textbox_Password').type('Password1{enter}',  { force: true })
   

}

export function invalidUsername() {
    cy.get('#_Textbox_Username').type('rayhantestt', { force: true, log: false})
    cy.get('#_Textbox_Password').type('Password1{enter}', { force: true, log: false })

}

export function invalidPassword() {

    cy.get('#_Textbox_Username').type('rayhantest', { force: true, log: false})
    cy.get('#_Textbox_Password').type('Password11{enter}', { force: true, log: false })

}

export function logout() {
    cy.get('#_Textbox_Username').type('rayhantest', { force: true, log: false})
    cy.get('#_Textbox_Password').type('Password1{enter}', { force: true, log: false })
    cy.get('#UI_UserToolbar_CurrentUser_hyperlink').click({ force: true})
    cy.get('#cm_logout_item').click({ force: true})   
}

export function inactiveSession() {

    cy.get('#_Textbox_Username').type('rayhantest', { force: true, log: false})
    cy.get('#_Textbox_Password').type('Password1{enter}', { force: true, log: false })
    cy.get('#UI_UserToolbar_CurrentUser_hyperlink').click({ force: true})
    cy.get('#cm_logout_item').click({ force: true})
    cy.go('back') 
}