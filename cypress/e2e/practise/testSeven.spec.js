describe('Basic page interactions', () => {
    beforeEach(() => {
        cy.visit('/example-4')
    
    });

    it('Displays appropriate character limits', () => {

        cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
            .dblclick();

            cy.get('[data-cy=box-1-selected-name]')
            .invoke('text')
            .should('equal', 'Option Two')
    
        });


        it('Displays correct check boxes', () => {

           cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
            
                .check();

            cy.get('[data-cy=box-2-selected-count]')
                .invoke('text')
                .should('equal', '1');
         });



         it('Displays name of currently selected item', () => {

            cy.get('[data-cy=box-3-dropdown]')

                .select('Option Three');

                cy.get('[data-cy=box-3-selected-name]')
                .invoke('text')
                .should('equal', 'Option Three');
           
          });


    });
