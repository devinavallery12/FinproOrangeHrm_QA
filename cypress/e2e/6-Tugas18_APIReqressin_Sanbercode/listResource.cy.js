//<Reference types="cypress"/>

describe('API tesing Reqressin', () => {
    it('GET API listresource tesing', () => {
        cy.request('GET', 'https://reqres.in/api/unknown')
        .then((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body).to.not.be.null
        })
    })
})