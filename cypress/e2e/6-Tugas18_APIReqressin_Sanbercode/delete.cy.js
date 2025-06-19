//<Reference types="cypress"/>
//ada error juga
describe('API tesing Reqressin', () => {
    it('DELETE API tesing', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2')
        .then((Response) => {
            expect(Response.status).to.eq(204)
            expect(Response.body).to.not.be.null
        })
    })
})