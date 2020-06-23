import { 
navigate, 
awardingInstitutes, 
baseCampus, 
strandCampus,  
regulatingBodies, 
partners, 
additionalCampuses, 
additionalLocation, 
awardingInstitutions } from "../../page-objects/ugCourse";

describe("Course Essentials Tab", function(){

beforeEach(() => {
        navigate()
})
    
it('Awarding Institution(s)', function() {
       
        awardingInstitutes()
})

it('Base Campus', function() {
        
        baseCampus()
})

it('Strand Campus', function() {

        strandCampus()
})


it('Regulating bodies', function() {
        
        regulatingBodies()   
})


it('Partners', function() {
        
        partners()
 })

it('Additional campuses ', function() {
        
        additionalCampuses()
})


it('Additional locations', function() {
        
        additionalLocation()
})


it('Awarding Institutions', function() {
       
        awardingInstitutions()
    
})


})