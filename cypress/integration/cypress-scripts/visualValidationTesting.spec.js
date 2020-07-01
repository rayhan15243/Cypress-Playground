describe("Visual Validation Physics Subject Area", function(){
    beforeEach(() => {
        cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/subject-area/physics")
        cy.eyesOpen({
            appName: 'Physics Page', 
            testName: 'Physics Subject Area Page' })
        
        browser: [

            {name: 'chrome', width: 1024, height: 768},
            {name: 'safari', width: 1024, height: 768},
            {deviceName: 'iPhone 5/SE'},

        ]
      });
     

    it('Physics Subject Area', function() {
    

    cy.eyesCheckWindow('Landing Page')
    
    });

    afterEach(() => {
        cy.eyesClose();
      });
 });