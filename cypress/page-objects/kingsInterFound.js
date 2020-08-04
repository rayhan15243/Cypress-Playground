
export function navigate() {
    cy.visit("http://dev.preview.kcl.contensis.cloud/study/test-foundation-course")
}


export function getTitle() {
    cy.get('.course-name').should('have.text', "Test Kings Foundation Course")
    cy.get('.course-category').should('have.text', "King's International Foundation")

}

export function keyInformation() {

   cy.contains("Foundation")
   .should('be.visible')

}

