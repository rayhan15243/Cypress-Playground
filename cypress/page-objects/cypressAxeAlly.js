export function terminalLog(violations) {
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length
      })
    )
  
    cy.task('table', violationData)
  }

  export function runAlly() {
    it('UG Course Pages Accessibility Testing', function() {
        
        cy.visit("http://dev.preview.kcl.contensis.cloud/study/undergraduate/courses/english-test")
        cy.injectAxe();
        cy.checkA11y(null, null, terminalLog)
        });
  }