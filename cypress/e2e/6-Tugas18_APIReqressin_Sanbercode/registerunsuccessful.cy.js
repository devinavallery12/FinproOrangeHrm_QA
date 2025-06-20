/// <reference types="cypress" />

const headers = { 'x-api-key': 'reqres-free-v1' }

describe('API testing', () => {
  it('POST register unsuccessful', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      headers: headers,
      failOnStatusCode: false, 
      body: {
        email: 'sydney@fife'
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('error', 'Missing password')
    })
  })
})