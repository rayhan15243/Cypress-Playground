
describe("Accessibility Demo", function(){

    beforeEach(() => {

        cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/subject-area/physics")
        cy.injectAxe();
    })

   
   it('No detectable ally violations on page load', function() {
        cy.checkA11y()
    });
});