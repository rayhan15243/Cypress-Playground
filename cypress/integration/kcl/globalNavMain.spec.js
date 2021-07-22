import { 
  navigate, 
  keyNav,
  keyNavClicked,
  hoverDropDown,
  secondaryNavVisible,
  secondaryNavClicked} from "../../page-objects/globalNavFooter";

describe("Global Nav Main", function(){

beforeEach(() => {

      navigate()

})

 it('Key Nav', function() {
      
        keyNav()    
 })

  it('Key Nav Clicked', function() {

        keyNavClicked()
  })

  it('Hover Drop Down', function() {
        hoverDropDown()
  }) 


it('Secondary Nav Visible', function() {
      secondaryNavVisible()
}) 

it('Secondary Nav Clicked', function() {
    secondaryNavClicked()
    
}) 





})