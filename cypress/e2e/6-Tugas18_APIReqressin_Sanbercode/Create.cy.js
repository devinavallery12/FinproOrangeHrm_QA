//<Reference types="cypress"/>
//error juga
describe('API tesing Reqressin', () => {
    it('POST API create tesing', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                neme: 'morpheus',
                job: 'leader',
            }
        })
        .then((Response) => {
            expect(Response.body.data).to.have.property('name', 'morpheus')
            expect(Response.body.data).to.have.property('job', 'leader')
            expect(response.body).to.have.property('id') // generated secara dinamis
            expect(response.body).to.have.property('createdAt')
            expect(Response.status).to.eq(201)
            expect(Response.body).to.not.be.null
        })
    })
})