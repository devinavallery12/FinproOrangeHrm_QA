//<Reference types="cypress"/>
//ada error juga
describe('API tesing Reqressin', () => {
    it('PUT API update tesing', () => {
        cy.request('PUT', 'https://reqres.in/api/users/2')
        .then((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body).to.not.be.null
        })
    })
})