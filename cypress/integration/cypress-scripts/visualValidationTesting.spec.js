describe("Visual Validation Physics Subject Area", function(){
       
        beforeEach(() => {
          cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/subject-area/physics")
          cy.eyesOpen({
            testName: 'Physics Subject Area Page',
            appName: 'Physics Page',
            browser: [
                 { width: 1366, height: 768, name: 'chrome' },
                 { width: 1366, height: 768, name: 'firefox' },
                 { width: 1366, height: 768, name: 'safari' },
                 { width: 1366, height: 768, name: 'ie11' }
               ]
           });
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