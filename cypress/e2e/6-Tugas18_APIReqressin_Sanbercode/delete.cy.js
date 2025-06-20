/// <reference types="cypress"/>

const headers = { 'x-api-key': 'reqres-free-v1' }

describe('API testing Reqres.in', () => {
    it('DELETE - Delete user', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2', // ID 23 tidak ada di data
            headers: headers,
            failOnStatusCode: false,
        })
        .then((response) => {
            expect(response.status).to.eq(204);
            expect(response.body).to.be.empty;
        });
    });
});