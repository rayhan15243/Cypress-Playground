
export function navigate() {
    cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/foundations/courses/kings-international-foundation-economics-mathematics-copy")
}


export function getTitle() {
    cy.get('.course-name').should('have.text', "Test Foundation page")
    cy.get('.course-category').should('have.text', "King's International Foundation")

}

export function keyInformation() {

   cy.contains("Foundation").should('be.visible')

}

export function contactComponent() {
    cy.contains("Contact us").should('be.visible')
    cy.get("britishCouncilLogo").should('be.visible')
}

