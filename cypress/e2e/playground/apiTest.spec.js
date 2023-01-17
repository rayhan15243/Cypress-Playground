describe("API Testing Practise", function(){

it('GET FUNDS', function() {
    cy.request('GET', 'https://funding-service-design-application-store-dev.london.cloudapps.digital/applications?').then((response) => {
    expect(response).to.have.property('status', 200)
})        
})

})