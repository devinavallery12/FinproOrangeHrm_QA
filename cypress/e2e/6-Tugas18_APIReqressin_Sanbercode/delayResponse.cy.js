/// <reference types="cypress"/>

const headers = { 'x-api-key': 'reqres-free-v1' }

describe('API testing Reqres.in', () => {
    it('GET delayed response', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?delay=3', // ID 23 tidak ada di data
            headers: headers,
            failOnStatusCode: false,
            
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
        });
    });
});