/// <reference types="cypress"/>

const headers = { 'x-api-key': 'reqres-free-v1' }

describe('API testing Reqres.in', () => {
    it('GET - Single resource Not Found', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/23', // ID 23 tidak ada di data
            headers: headers,
            failOnStatusCode: false,
        })
        .then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.be.empty;
        });
    });
});