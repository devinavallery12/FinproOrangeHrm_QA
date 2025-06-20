/// <reference types="cypress" />

const headers = { 'x-api-key': 'reqres-free-v1' }
//negatif case 1 salah masukkan email
describe('API testing', () => {
  it('POST Login unsuccessful', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      headers: headers,
      failOnStatusCode: false, 
      body: {
        email: 'peter@klaven'
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('error', 'Missing password')
    })
    
    //negatif case 2 jika tidak menggunakan API Key
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        //jika tidak menggunakan API Key
       // headers: headers,
        failOnStatusCode: false, 
        body: {
          email: 'peter@klaven'
        }
      }).then((response) => {
        expect(response.status).to.eq(401)
        expect(response.body).to.have.property('error', 'Missing API key.')

  })
  //negatif case 3 jika request bodynya tidak dimasukkan tp menggunakan API Key
  cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/login',
    // menggunakan API Key
    headers: headers,
    failOnStatusCode: false, 
    //body: {
      //email: 'peter@klaven'
    //}
  }).then((response) => {
    expect(response.status).to.eq(400)
    expect(response.body).to.have.property('error', 'Missing email or username')

    })

})
})