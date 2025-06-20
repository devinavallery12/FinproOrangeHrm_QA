/// <reference types="cypress"/>

const headers = { 'x-api-key': 'reqres-free-v1' }

describe('API tesing Reqressin', () => {
    it('PATCH API update tesing', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/2',
            headers: headers,
            failOnStatusCode: false,
            body: {
                name: 'morpheus',
                job: 'zion resident',
            }
        })
        .then((response) => {
            expect(response.body).to.have.property('name', 'morpheus')
            expect(response.body).to.have.property('job', 'zion resident')
            expect(response.body).to.have.property('updatedAt')
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})