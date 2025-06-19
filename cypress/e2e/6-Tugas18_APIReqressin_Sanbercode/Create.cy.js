//<Reference types="cypress"/>
//error juga
describe('API tesing Reqressin', () => {
    it('POST API create tesing', () => {
        cy.request('POST', 'https://reqres.in/api/users')
        .then((Response) => {
            expect(Response.status).to.eq(201)
            expect(Response.body).to.not.be.null
        })
    })
})