//<Reference types="cypress"/>
describe('API tesing Reqressin', () => {
    it('GET API singleresource tesing', () => {
        cy.request('GET', 'https://reqres.in/api/unknown/2')
        .then((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body.data).to.have.property('id', 2)
            expect(Response.body.data).to.have.property('name', 'fuchsia rose')
            expect(Response.body).to.not.be.null
        })
    })
})