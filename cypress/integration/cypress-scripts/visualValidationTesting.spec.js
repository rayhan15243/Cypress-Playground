describe("Visual Validation King'\s Foundation", function(){
       
  beforeEach(() => {
          cy.visit("http://dev.preview.kcl.contensis.cloud/study/test-foundation-course")
        });


  it("Desktop Visual Validation", function() {

    cy.viewport(1440, 900) 

    cy.eyesOpen({
     
      testName: 'King\'s Foundation Page',
      appName: 'King\'s Foundation Page',
      browser: [
           { width: 1440, height: 900, name: 'chrome' },
           { width: 1440, height: 900, name: 'firefox' },
           { width: 1440, height: 900, name: 'safari' },
           { width: 1440, height: 900, name: 'ie11' },
      ],
      matchLevel: "Layout"
   });

   

   cy.eyesCheckWindow({
    layout: [
     
    ],
      fully: true
  });
  
  });
  
      
     

    it('Mobile Visual Validation', function() {

     
      cy.eyesOpen({
        testName: 'King\'s Foundation Desktop',
        appName: 'King\'s Foundation Page',
        browser: [
             { deviceName: 'iPhone X'},
             { deviceName: 'Galaxy S5'}
        ],
        matchLevel: "Layout"
    
  });

 

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