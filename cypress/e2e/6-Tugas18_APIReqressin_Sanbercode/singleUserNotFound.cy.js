//<Reference types="cypress"/>
//ini masih error
describe('API tesing Reqressin', () => {
    it('Get API singleUsernotfound tesing', () => {
        cy.request('GET', 'https://reqres.in/api/users/23')
        .then((Response) => {
            expect(Response.status).to.eq(404)
            expect(Response.body).to.not.be.null
        })
    })
})