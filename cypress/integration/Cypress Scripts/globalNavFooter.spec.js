describe("Global Nav and Footer", function(){

 /*   it('Key Nav', function() {
        cy.visit("http://staging.preview.kcl.contensis.cloud/study/undergraduate/courses/english-test")
            cy.contains('Study').should('be.visible')
            cy.wait(4000)
            cy.contains('Student services').should('be.visible')
            cy.wait(4000)
            cy.contains('Research & Innovation').should('be.visible')
            cy.wait(4000)
            cy.contains('Our faculties').should('be.visible')
            cy.wait(4000)
            cy.contains('About King\'s').should('be.visible')
            cy.wait(4000)
            
  })

  it('Hover Drop Down', function() {
    cy.visit("http://staging.preview.kcl.contensis.cloud/study/undergraduate/courses/english-test")
            cy.contains('Study').trigger('mouseover')
            cy.wait(4000)
            cy.contains('Student services').trigger('mouseover')
            cy.wait(4000)
            cy.contains('Research & Innovation').trigger('mouseover')
            cy.wait(4000)
            cy.contains('Our faculties').trigger('mouseover')
            cy.wait(4000)
            cy.contains('About King\'s').trigger('mouseover')
            cy.wait(4000)
}) */




/* it('Connect with King\'s College London',function() {

    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Connect with King’s College London').should('be.visible')
 

})

it('Global Footer Ad Landing Pages', function() {
    cy.visit("http://preview.kcl.contensis.cloud/study-at-kings/study-physics-at-kings")
    cy.contains('Terms & conditions').should('be.visible').click()
    cy.wait(4000)
    cy.visit("http://preview.kcl.contensis.cloud/study-at-kings/study-physics-at-kings")
    cy.contains('Privacy policy').should('be.visible').click()
    cy.wait(4000)
    cy.visit("http://preview.kcl.contensis.cloud/study-at-kings/study-physics-at-kings")
    cy.contains('Modern slavery statement').should('be.visible').click()
    cy.wait(4000)
    cy.visit("http://preview.kcl.contensis.cloud/study-at-kings/study-physics-at-kings")
    cy.contains('Accessibility').should('be.visible').click()
    cy.wait(4000)
    cy.visit("http://preview.kcl.contensis.cloud/study-at-kings/study-physics-at-kings")
    cy.contains('Sitemap').should('be.visible').click()
    cy.wait(4000)
    cy.visit("http://preview.kcl.contensis.cloud/study-at-kings/study-physics-at-kings")
}) 


it('Global Footer UG Course Pages', function() {
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Terms & conditions').should('be.visible').click()
    cy.wait(4000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Privacy policy').should('be.visible').click()
    cy.wait(4000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Modern slavery statement').should('be.visible').click()
    cy.wait(4000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Accessibility').should('be.visible').click()
    cy.wait(4000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Sitemap').should('be.visible').click()
    cy.wait(4000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
}) 

*/

it('Massive Global Footer UG Course Pages', function() {

    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Study at King\'s').should('be.visible')
    cy.contains('Information for').should('be.visible')
    cy.contains('Facilities').should('be.visible')
    cy.contains('Discover King\'s').should('be.visible')
    cy.contains('Contact us').should('be.visible')


   
    cy.contains('Degree courses').should('be.visible', 'eq',' /study/undergraduate/index.aspx' ).click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Graduate education').should('be.visible').click()
    cy.wait(5000)
  /*  cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('International students').should('be.visible').click()
    cy.wait(5000) */
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Summer schools').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Student life').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('New students').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Current students').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Staff').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Student services').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Accommodation').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Academic Calendar').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('News Centre').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Events').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Student’s Union').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Visit King’s').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('Job opportunities').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
    cy.contains('King’s community').should('be.visible').click()
    cy.wait(5000)
    cy.visit("http://preview.kcl.contensis.cloud/study/undergraduate/courses/physics-with-astrophysics-and-cosmology-2")
}) 



})