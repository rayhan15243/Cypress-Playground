import { LoginPage } from "./page-objects/login_page"

const loginPage = new LoginPage()


it('POM', function() {

    cy.visit('https://opensource-demo.orangehrmlive.com/')
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    
})