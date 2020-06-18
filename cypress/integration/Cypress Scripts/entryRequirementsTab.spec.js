import { 
    navigate, 
    entryRequirements,
    qualifications, 
    internationalBaccalaureate,
    gcse,international } from "../../page-objects/ugCourse";


describe("Entry Requirements Tab", function(){

    beforeEach(() => {
        navigate()
})
    it('Entry Requirements', function() {
        
        entryRequirements() 
      
    })

    it('Qualifications', function() {
        qualifications()
      
    })

    it('International Baccalaureate', function() {
        internationalBaccalaureate()
      
    })

    it('GCSEs', function() {
        gcse()
        
    })

    it('International', function() {
       international()
      
    })

})
