import { 
    navigate, 
    connectWithKings,
    globalFooterSubjectArea,
    mainGlobalFooterSubjectArea} from "../../page-objects/globalNavFooter";


describe("Global Footer", function(){

 beforeEach(() => {
     
    navigate()
 
 
 })

 it('Connect with King\'s College London',function() {

    connectWithKings()
    
 })

it('Global Footer Physics Subject Area', function() {

    globalFooterSubjectArea()
}) 





it('Massive Global Footer UG Course Pages', function() {

    mainGlobalFooterSubjectArea()
}) 



})