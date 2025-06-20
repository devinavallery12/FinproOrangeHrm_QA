//<Reference types="cypress"/>
//error juga pdh status code nya udh disesuaikan dn sama di postman
describe('API tesing Reqressin', () => {
    it('GET API singleresourcenotfound tesing', () => {
        cy.request('GET', 'https://reqres.in/api/unknown/23')
        .then((Response) => {
            expect(Response.status).to.eq(404)
            expect(Response.body).to.not.be.null
        })
    })
})