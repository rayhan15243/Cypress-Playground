import { 
    navigate, defaultFee, genericFunding, } from "../../page-objects/ugCourse";


describe("Fees & Funding Tab", function(){

    beforeEach(() => {
        navigate()
})

it('AC3 Default fee', function() {
        defaultFee()
})

it('AC7 Generic Funding', function() {
    genericFunding()
})

})