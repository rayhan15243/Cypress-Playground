describe("Visual Validation Physics Subject Area", function(){
       
        beforeEach(() => {
          cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/subject-area/physics")
          cy.eyesOpen({
            testName: 'Physics Subject Area Page',
            appName: 'Physics Page',
            browser: [
                 { width: 1440, height: 900, name: 'chrome' },
                 { width: 1440, height: 900, name: 'firefox' },
                 { width: 1440, height: 900, name: 'safari' },
                 { width: 1440, height: 900, name: 'ie11' },
                 { deviceName: 'iPhone X'},
                 { deviceName: 'Galaxy S5'}
            ],
            matchLevel: "Layout"
           });
         });
     

    it('Physics Subject Area', function() {
    

      cy.eyesCheckWindow({
        layout: [
         
        ],
          fully: true
      });
    
    });

    afterEach(() => {
        cy.eyesClose();
      });
 });