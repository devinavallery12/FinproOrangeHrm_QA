//<Reference types="cypress"/>
//error juga
describe('API testing Reqres.in', () => {
    it('POST API Register Successful testing', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                email: "eve.holt@reqres.in",
                password: "pistol"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', 4)
            expect(response.body).to.have.property('token')
        });
    });
});
