

export function navigate() {
   
    // cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/courses/english-test")
    cy.visit("https://www.kcl.ac.uk/study/undergraduate/courses/english-ba")
}

export function ugRegression(){
    cy.get('.course-name').should('have.text', 'English BA')
    cy.get('.course-category').should('have.text', 'Undergraduate degree')
    cy.get(':nth-child(1) > [data-testid=TabList]').should('have.text', 'Course essentials')
    cy.get(':nth-child(2) > [data-testid=TabList]').should('have.text', 'Entry requirements')
    cy.get(':nth-child(3) > [data-testid=TabList]').should('have.text', 'Teaching & structure')
    cy.get(':nth-child(4) > [data-testid=TabList]').should('have.text', 'Careers')
    cy.get(':nth-child(5) > [data-testid=TabList]').should('have.text', 'Fees & Funding')
    cy.get('[title="Apply via UCAS"]')
    cy.get('.section-heading')
}


// Old test scripts

// export function assessment() {
//     cy.contains('Teaching & structure').click({ force: true})
//     cy.contains('Assessment')
//     cy.contains('Teaching methods')
//     cy.contains('Learning outcomes')
//     cy.contains('Structure')
//     cy.contains('Required modules')
//     cy.contains('Optional modules')
// }

// export function awardingInstitutes() {
//     //  cy.location('protocol').should('eq', 'https:')
//     cy.contains('Awarding Institutions').should('be.visible')
//     // cy.go(-1) cy.go(back)
//     // cy.go(1) cy.go(forward() 
// }

// export function baseCampus() {
//     cy.contains('Base campus').should('be.visible')
// }

// export function strandCampus() {
//     cy.contains('Strand Campus').should('be.visible')
//     cy.contains('River Thames').should('be.visible')
//     cy.get('[alt="The Quad - Strand campus"]').should('be.visible')
// }

// export function regulatingBodies() {
        
//     cy.contains('Regulating bodies').should('be.visible')

// }

// export function partners() {
//     cy.contains('Partners').should('be.visible')
// }

// export function additionalCampuses() {
//     cy.contains('Additional campuses ').should('be.visible')
// }

// export function additionalLocation() {
        
//     cy.contains('Additional locations').should('be.visible')

// }

// export function awardingInstitutions()  {
       
//     cy.contains('Awarding Institutions').should('be.visible')
    
// }

// export function entryRequirements()  {
       
//     cy.contains('Entry requirements').should('be.visible').click()
//     cy.contains('Required grades').should('be.visible')
//     cy.contains('Required subjects').should('be.visible')
//     cy.contains('Preferred subjects').should('be.visible')
    
// }

// export function qualifications() {
//     cy.contains('Entry requirements').should('be.visible').click()
//     cy.get('#altQualifications').select('Australian diploma')
// }

// export function internationalBaccalaureate() {
//     cy.contains('Entry requirements').should('be.visible').click()
//     cy.contains('International Baccalaureate').should('be.visible')
// }

// export function gcse() {
//     cy.contains('Entry requirements').should('be.visible').click()
//     cy.contains('GCSEs').should('be.visible')
// }

// export function international() {
   
//     cy.contains('Entry requirements').should('be.visible').click()
//     cy.get('#intQualifications').select('Brazil')
//     cy.get('#intQualifications').select('New Zealand')
// }

// export function displayFeesFunding() {
    
//     cy.contains('Fees & Funding')
//     cy.contains('£9,250')
//     cy.contains('Funding')
//     cy.contains('£40000')
//     cy.contains('£5000')
//     cy.contains('Further fee information')
//     cy.contains('Additional costs further information')
// }


// export function getLocationDisclaimerText() {
//     cy.contains('Course essentials').should('be.visible')
//     cy.get('.text > p').should('be.visible')
// }