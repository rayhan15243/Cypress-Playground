describe ('Text box with max character limits', () => {

    it('Displays appropriate character limits', () =>{

    cy.visit('http://localhost:3000/example-2')
    cy.get('span')
        .invoke('text')
        .should('equal', '15');

    cy.get('input').type('hello')

    cy.get('span')
        .invoke('text')
        .should('equal', '10');
    
    cy.get('input').type(' my friend')

    cy.get('span')
        .invoke('text')
        .should('equal', '0');

    });



    it('prevents user from typing more characters once max is exceeded', () =>{

    cy.visit('http://localhost:3000/example-2')
    
    

    cy.get('input').type('asdfghjjklpoiuytrrewwss')

    cy.get('input')
        .should('have.attr', 'value', 'asdfghjjklpoiuy')
    

    });
});