import { 
    navigate, 
    search,
    mainNav,
    dropDowns} from "../../page-objects/libAnswers";

describe("Lib Answers", function(){


beforeEach(() => {
   
    navigate()

})

it('Search', function() {
       
    search()
               
})

  it('Main Nav Links', function() {
    
    mainNav()
          
})

it('Drop Downs', function() {
    
    dropDowns()
 
  
})



})