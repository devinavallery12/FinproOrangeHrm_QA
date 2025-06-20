//<Reference types="cypress"/>

describe('API tesing Reqressin', () => {
    it('GET API delayedresponse', () => {
        cy.request('GET', 'https://reqres.in/api/users?delay=3')
        .then((Response) => {
            //status code di postman 200 msh error
            expect(Response.status).to.eq(200)
            //listuser ini bentuk array, untuk ambil data dari data ke -0
            expect(Response.body.data[0]).to.have.property('id', 1);
            expect(Response.body.data[0]).to.have.property('first_name', 'George');
            expect(Response.body).to.not.be.null
        })
    })
})