// "viewportWidth": 1440,
// "viewportHeight": 900,

describe("Visual Validation King'\s Foundation", function(){
       
  beforeEach(() => {
          cy.visit("http://dev.preview.kcl.contensis.cloud/study/test-foundation-course")
        });


  it("Desktop Visual Validation", function() {

    cy.viewport(1440, 800) 

    cy.eyesOpen({
     
      testName: 'King\'s Foundation Page Desktop',
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

    cy.viewport(1000, 800) 
    cy.wait(2000)

    cy.eyesOpen({
      testName: 'King\'s Foundation Page Mobile',
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
  