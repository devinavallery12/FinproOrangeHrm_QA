//<Reference types="cypress"/>

describe('API tesing Reqressin', () => {
    it('Get API singleUser tesing', () => {
        cy.request('GET', 'https://reqres.in/api/users/2')
        .then((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body).to.not.be.null
        })
    })
})