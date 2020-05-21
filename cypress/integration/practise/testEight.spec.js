/// <reference types="Cypress" />


// alert(Cypress.env('MY_ENV_VARIABLE'));


describe('Basic Page interactions', () => {
    beforeEach(() => {
        cy.visit('/example-4')
    
    });

    it('Header text to item name when doubled clicked', () => {

        cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
            .dblclick();

        cy.get('[data-cy=box-1-selected-name]')
        .invoke('text')
        .should('equal', 'Option Three')

        });


    it('Displays Checkboxes selected', () => {
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
        .check();

        cy.get('[data-cy=box-2-selected-count]')
        .invoke('text')
        .should('equal', '1');
    });

    it('Displays name of currently selected item', () => {
        cy.get('[data-cy=box-3-dropdown')
        .select('Option Three')

        cy.get('[data-cy=box-3-selected-name]')
        .invoke('text')
        .should('equal', 'Option Three');
    });


    it('Display name of recently hovered item', () => {
        cy.get('[data-cy=box-4-items-list] > :nth-child(2)')
        .trigger('mouseover')
        .debug();

        cy.get('[data-cy=box-4-selected-name]')
        .invoke('text')
        .should('equal', 'Option Two');
    });
});