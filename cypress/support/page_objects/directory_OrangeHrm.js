import loginData_orangeHrm from "../../fixtures/loginData_OrangeHrm.json"

class directoryPage{
    
    visit() {
        cy.visit('/web/index.php/directory/viewDirectory')//buka halaman directory
    }

    //user membuka halaman directory
    click_halaman_directory(){
        cy.xpath('//span[text()="Directory"]').should('be.visible').click();
    }

    //user memvalidasi sudah berada di halaman directory dengan url dan judul halaman
    verify_base_url_directory(){
        cy.url().should('include','/web/index.php/directory/viewDirectory')
        cy.xpath('//h6[normalize-space()="Directory"]').should('contain.text', 'Directory')
    }

    // User Pilih salah satu Job Title (misal "Account Assistant")
    select_job_title(){
        cy.get('div.oxd-select-wrapper').eq(0).click() // dropdown pertama (Job Title)
        cy.get('.oxd-select-dropdown > *').contains('Account Assistant').click()

    }

    //User mengklik button search
    click_button_search(){
        cy.xpath('//button[normalize-space()="Search"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Search"]').click()
        cy.wait(2000)
    }

    // User Pilih salah satu location (misal "New York Sales Office")
    select_location(){
        cy.get('div.oxd-select-wrapper').eq(1).click() // dropdown kedua (location)
        cy.get('.oxd-select-dropdown > *').contains('New York Sales Office').click()
    }
    
    //User menginputkan employee name invalid di field employee name pada halaman directory
    null_employee_name(){
        cy.xpath('//input[@placeholder="Type for hints..."]').should('be.visible')
        cy.xpath('//input[@placeholder="Type for hints..."]').clear().should('not.have.value')
    
    }

    //user menginputkan employee name valid di field employee name pada halaman directory
    valid_employee_name(employeename) {
        cy.xpath('//input[@placeholder="Type for hints..."]').should('be.visible')
        cy.xpath('//input[@placeholder="Type for hints..."]').clear().type(employeename).should('have.value', employeename)
    }

    //User menginputkan employee name invalid di field employee name pada halaman directory
    invalid_employee_name(employeename){
        cy.xpath('//input[@placeholder="Type for hints..."]').should('be.visible')
        cy.xpath('//input[@placeholder="Type for hints..."]').clear().type(employeename).should('have.value' , employeename)
    }

    //user mendapatkan validasi "required"
    verify_error_required(){
        cy.xpath('//span[@class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
        .should('contain.text', 'Invalid')
    }
    
    //klik nama dari dropdown list
    click_dropdown_list(){
        cy.get('.oxd-autocomplete-dropdown').should('be.visible')
        cy.get('.oxd-autocomplete-option').contains('Peter Mac Anderson').click()
    }
    
    //klik nama dari hasil pencarian
    click_nama_valid_hasil_pencarian(){
        cy.get('.orangehrm-directory-card-header').should('contain', 'Peter Mac Anderson').click()
    }
}

export default new directoryPage(); //export directoryPage nya