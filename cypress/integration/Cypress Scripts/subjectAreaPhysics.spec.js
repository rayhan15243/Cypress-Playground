describe ('Heading text', () => {

    it('contains the correct title', () =>{

    cy.visit('http://localhost:3000/study/undergraduate/subject-area/physics')
    cy.get('h1')
        .invoke('text')
        .should('equal', 'Physics');

    });
});