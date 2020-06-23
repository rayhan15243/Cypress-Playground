import { 
    navigate, 
    subjectAreaTitle, 
    courseListing } from "../../page-objects/subjectArea";

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