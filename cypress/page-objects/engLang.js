export function navigate() {
     //   cy.visit("http://storybook.develop.kcl.contensis.cloud/iframe.html?id=components-stickynav--with-scroll-to#section-1")     
          cy.visit("http://dev.preview.kcl.contensis.cloud/study/international/english-language-requirements")


    }

export function sections() {
    cy.contains('Heading 1').should('be.visible').click()
    cy.contains('Heading 2').should('be.visible').click()
    cy.contains('Heading 3').should('be.visible').click()
    cy.contains('Heading 4').should('be.visible').click()
  //  cy.contains('Section 6').should('be.visible').click()     
}

