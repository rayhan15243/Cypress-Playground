describe("Visual Validation Physics Subject Area", function(){
    
    beforeEach(() => {
        cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/subject-area/physics")
       
        cy.eyesOpen({
            appName: 'Physics Page', 
            testName: 'Physics Subject Area Page' })
           
        browser: [

            {name: 'chrome', width: 1024, height: 768},
            {name: 'firefox', width: 1024, height: 768},
        ]
      });
     

    it('Physics Subject Area', function() {
    

      cy.eyesCheckWindow({
        layout: [
          {top: 0, left: 0, width: 2000, height: 5000},
          {selector: '.some-div-to-test-as-layout'}
        ]
      });
    
    });

    afterEach(() => {
        cy.eyesClose();
      });
 });