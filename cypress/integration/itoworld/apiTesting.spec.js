describe("API Testing", function(){

    it('BODS Internal First Page', function() {
        cy.request('GET', 'https://data-bodp.staging.bus-data.dft.gov.uk/api/v1/dataset/?api_key=7478cb6615b5f8cfa660ebef4e6006518ffa6fec').then((response) => {
        expect(response).to.have.property('status', 200)
        })
})

})