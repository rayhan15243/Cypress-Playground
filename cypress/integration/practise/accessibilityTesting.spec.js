describe("Accessibility Demo", function(){

   
   it('Physics Subject Area', function() {
       cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/subject-area/physics")
       cy.injectAxe();
       cy.checkA11y();
    });
});