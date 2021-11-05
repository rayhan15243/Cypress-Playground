export function navigate() {
    cy.visit('http://localhost:3000/study/undergraduate/subject-area/physics')
}


export function keyNav () {
    cy.contains('Study').should('be.visible')
    cy.contains('Student services').should('be.visible')
    cy.contains('Research & Innovation').should('be.visible')
    cy.contains('Our faculties').should('be.visible')
    cy.contains('About King\'s').should('be.visible')
}

export function keyNavClicked() {
    cy.contains('Study').click()
    cy.go('back')
    cy.contains('Student services').click()
    cy.go('back')
    cy.contains('Research & Innovation').click()
    cy.go('back')
    cy.contains('Our faculties').click()
    cy.go('back')
    cy.contains('About King\'s').click()
    cy.go('back')
}

export function hoverDropDown () {
    cy.contains('Study').trigger('mouseover')
    cy.contains('Student services').trigger('mouseover')
    cy.contains('Research & Innovation').trigger('mouseover')
    cy.contains('Our faculties').trigger('mouseover')
    cy.contains('About King\'s').trigger('mouseover')
}

export function secondaryNavVisible () {

    cy.contains('Undergraduate').should('be.visible'),{ force: true}
    cy.contains('Postgraduate').should('be.visible'),{ force: true}
    cy.contains('More courses').should('be.visible'),{ force: true}
    cy.contains('International').should('be.visible'),{ force: true}
    cy.contains('Why King\’s').should('be.visible'),{ force: true}
    cy.contains('Accommodation').should('be.visible'),{ force: true}
    cy.contains('Student life').should('be.visible'),{ force: true}
    cy.contains('Visit King\’s').should('be.visible'),{ force: true}
}

export function secondaryNavClicked() {
    cy.contains('Undergraduate').click(),{ force: true}
    cy.go('back')
    cy.contains('Postgraduate').click(),{ force: true}
    cy.go('back')
    cy.contains('More courses').click(),{ force: true}
    cy.go('back')
    cy.contains('International').click(),{ force: true}
    cy.go('back')
    cy.contains('Why King\’s').click(),{ force: true}
    cy.go('back')
    cy.contains('Accommodation').click(),{ force: true}
    cy.go('back')
    cy.contains('Student life').click(),{ force: true}
    cy.go('back')
    cy.contains('Visit King\’s').click(),{ force: true}
}

export function connectWithKings() {
    cy.contains('Connect with King’s College London').should('be.visible')
}

export function globalFooterSubjectArea() {
    cy.contains('Terms & conditions').should('be.visible').click()
    cy.contains('Privacy policy').should('be.visible').click()
    cy.contains('Modern slavery statement').should('be.visible').click()
    cy.contains('Sitemap').should('be.visible').click()
}

export function mainGlobalFooterSubjectArea() {

    
    cy.contains('Study at King\'s').should('be.visible')
    cy.contains('Information for').should('be.visible')
    cy.contains('Facilities').should('be.visible')
    cy.contains('Discover King\'s').should('be.visible')
    cy.contains('Contact us').should('be.visible')

// 'eq',' /study/undergraduate/subject-area/physics'
   
    cy.contains('Degree courses').should('be.visible')
    cy.contains('Graduate education').should('be.visible')
    cy.go('back')
    cy.contains('International students').should('be.visible')
    cy.go('back')
    cy.contains('Summer schools').should('be.visible')
    cy.contains('Student life').should('be.visible')
    cy.contains('New students').should('be.visible')
    cy.contains('Current students').should('be.visible')
    cy.contains('Staff').should('be.visible')
    cy.contains('Student services').should('be.visible')
    cy.contains('Accommodation').should('be.visible')
    cy.contains('Academic Calendar').should('be.visible')
    cy.contains('News Centre').should('be.visible')
    cy.contains('Events').should('be.visible')
    cy.contains('Student’s Union').should('be.visible')
    cy.contains('Visit King’s').should('be.visible')
    cy.contains('Job opportunities').should('be.visible')
    cy.contains('King’s community').should('be.visible')
}