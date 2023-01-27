import { LoginPage } from "./page-objects/login_page"

const loginPage = new LoginPage()

describe("Assertion Test", function(){
        
    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })


it('POM', function() {
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    
})
})