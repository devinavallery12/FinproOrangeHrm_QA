//<Reference types="cypress"/>
//error juga
describe('API tesing Reqressin', () => {
    it('POST API Registsuccessful tesing', () => {
        cy.request('POST', 'https://reqres.in/api/register')
        .then((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body).to.not.be.null
        })
    })
})