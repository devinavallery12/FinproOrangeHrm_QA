/// <reference types="cypress" />

const headers = { 'x-api-key': 'reqres-free-v1' }

describe('API testing', () => {
  it('POST Login successful', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      headers: headers,
      failOnStatusCode: false, 
      body: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('token', 'QpwL5tke4Pnpja7X4')
    })
  })
})