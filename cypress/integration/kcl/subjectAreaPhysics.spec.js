import { 
    navigate, 
    subjectAreaTitle, 
    courseListing } from "../../modules/subjectArea";

describe ('Heading text', () => {

beforeEach (() => {

    navigate()
})

it('Correct Title', () =>{

    subjectAreaTitle()
});

it('WEBR-3920 - Course Listing Undergraduate', function() {
        
    courseListing()

})
});