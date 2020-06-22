
describe("Accessibility Demo", function(){

   it('No detectable ally violations on page load', function() {
        
    cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/subject-area/physics")
    cy.injectAxe();
    cy.checkA11y()
    });
});