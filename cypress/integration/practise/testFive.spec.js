 describe ('Text box with max character limits', () => {

    it('Displays appropriate character limits', () =>{

    cy.visit('http://localhost:3000/example-3')


    cy.get('[data-cy="last-name-chars-left-count"]')
    .as('charsLeftSpan');  


    cy.get('[data-cy="input-last-name"]')
    .as('charInput');

    cy.get('@charsLeftSpan').then($charsLeftSpan => {
        expect($charsLeftSpan.text()).to.equal('15');
    });
        

    cy.get('@charInput').type('hello')

    cy.get('@charsLeftSpan')
        .invoke('text')
        .should('equal', '10');
    
    cy.get('@charInput').type(' my friend')

    cy.get('@charsLeftSpan')
        .invoke('text')
        .should('equal', '0');

    });



    it('prevents user from typing more characters once max is exceeded', () =>{

    cy.visit('http://localhost:3000/example-3')
    
    

    cy.get('[data-cy="input-last-name"]').type('asdfghjjklpoiuytrrewwss')

    cy.get('[data-cy="input-last-name"]')
        .should('have.attr', 'value', 'asdfghjjklpoiuy')
    

    });
});