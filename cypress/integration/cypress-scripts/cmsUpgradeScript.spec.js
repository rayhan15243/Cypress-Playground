import { 
  navigate, 
  emptyUsername, 
  emptyPassword, 
  successfulLogin, 
  invalidUsername, 
  invalidPassword, 
  logout,
  inactiveSession, emptyUserPassFields} from "../../page-objects/cmsUpgrade";


describe("CMS Upgrade Regression Test", function(){
  
  beforeEach(() => {

    navigate()
})

it('Empty Username Field', function() {

      emptyUsername()
    
})


it('Empty Password Field', function() {
    
    emptyPassword()
  
})

  it('Empty Password and Username Field', function() {
    
    emptyUserPassFields()
  
})

it('Successful Login', function() {
    
    successfulLogin()

})

it('Invalid Username', function() {
  
  invalidUsername()
 
})

it('Invalid Password', function() {
  
  invalidPassword()
 
})


it('Logout', function() {
     logout()
 })

 



 // it('Login Session Inactive Back Button', function() {
  
 // inactiveSession()

// })



})
