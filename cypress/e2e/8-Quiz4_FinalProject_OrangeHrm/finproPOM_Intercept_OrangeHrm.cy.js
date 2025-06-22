import loginPage_OrangeHrm from "../../support/page_objects/loginPage_OrangeHrm"
import forgotPasswordPage_OrangeHrm from "../../support/page_objects/forgotPasswordPage_OrangeHrm"
import loginData_orangeHrm from "../../fixtures/loginData_OrangeHrm.json"
import directory_OrangeHrm from "../../support/page_objects/directory_OrangeHrm";

describe('fungsional login', () =>{
    //positive case
    beforeEach(() => {
            // cy.visit('https://opensource-demo.orangehrmlive.com/')
            loginPage_OrangeHrm.visit();
        })
    it('TL-001-User menginputkan username & password yang valid',() =>{
        //memastikan sudah berada di url login orangeHRM
        loginPage_OrangeHrm.Verify_Base_Url_Login() 
        //Input Username
        loginPage_OrangeHrm.Input_Username(loginData_orangeHrm.valid_Username)
        //Input Password
        loginPage_OrangeHrm.Input_Password(loginData_orangeHrm.valid_Password)

        //intercept dulu untuk men-trigger request ke API
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionsummary')

        //Click Button
        loginPage_OrangeHrm.Click_Btn_Login()

        cy.wait('@actionsummary', {timeout: 10000}).its('response.statusCode').should('eq', 200)

        //Assert Login
        loginPage_OrangeHrm.Verify_Login_Success()

    });

    //negative case
    it('TL-002-User tidak menginputkan username dan password',() =>{
        //masuk url login OrangeHRM
        loginPage_OrangeHrm.Verify_Base_Url_Login()

        //tidak menginputkan username
        loginPage_OrangeHrm.Null_Username()

        //tidak menginputkan password
        loginPage_OrangeHrm.Null_Password()

        //cklick button login
        loginPage_OrangeHrm.Click_Btn_Login()

        //assert error login
        loginPage_OrangeHrm.verifyusernameandpassswordKosong()
    });


    it('TL-003-User menginputkan username valid & password yang invalid',() =>{
        //panggil url login OrangeHRM
        loginPage_OrangeHrm.Verify_Base_Url_Login()

       //Input username
       loginPage_OrangeHrm.Input_Username(loginData_orangeHrm.valid_Username)

       //input password
       loginPage_OrangeHrm.Input_Password(loginData_orangeHrm.invalid_Password)

       //clikbuttonlogin
       loginPage_OrangeHrm.Click_Btn_Login()

       //assert error login
       loginPage_OrangeHrm.Verify_Password_Invalid()

    });

    it('TL-004-User menginputkan username invalid & password valid',() =>{
        //panggil url login OrangeHRM
        loginPage_OrangeHrm.Verify_Base_Url_Login()

        //input username invalid
        loginPage_OrangeHrm.Input_Username(loginData_orangeHrm.invalid_Username)

        //input password valid
        loginPage_OrangeHrm.Input_Password(loginData_orangeHrm.valid_Password)

        //clickbuttonlogin
        loginPage_OrangeHrm.Click_Btn_Login()

        //assert error login
        loginPage_OrangeHrm.Verify_Username_Invalid()

    });

    it('TL-005-User hanya mengiputkan password dan tidak menginputkan username',() =>{
        //panggil url login OrangeHRM
        loginPage_OrangeHrm.Verify_Base_Url_Login()

        //tidak menginputkan username alias null
        loginPage_OrangeHrm.Null_Password()

        //input password valid
        loginPage_OrangeHrm.Input_Password(loginData_orangeHrm.valid_Password)

        //clickbuttonlogin
        loginPage_OrangeHrm.Click_Btn_Login()

        //assert error login
        loginPage_OrangeHrm.Verify_Username_Kosong()
    });

    it('TL-006-User hanya menginputkan username dan tidak menginputkan password', () =>{
        //panggil url login OrangeHRM
        loginPage_OrangeHrm.Verify_Base_Url_Login()

        //input username 
        loginPage_OrangeHrm.Input_Username(loginData_orangeHrm.valid_Username)

        //tidak menginputkan password alias null
        loginPage_OrangeHrm.Null_Password()

        //clickbuttonlogin
        loginPage_OrangeHrm.Click_Btn_Login()

        //assert error login
        loginPage_OrangeHrm.Verify_Username_Kosong()

    });

    it('TL-007-User menginputkan username dan password yang invalid', () => {
        //panggil url login OrangeHRM
        loginPage_OrangeHrm.Verify_Base_Url_Login()

        //input username invalid
        loginPage_OrangeHrm.Input_Username(loginData_orangeHrm.invalid_Username)

        //input password valid
        loginPage_OrangeHrm.Input_Password(loginData_orangeHrm.invalid_Password)

        //clickbuttonlogin
        loginPage_OrangeHrm.Click_Btn_Login()

        //assert error login
        loginPage_OrangeHrm.Verify_Username_Invalid()

    });
});

describe('fungsional forgot password', () =>{
    //positif case
    beforeEach(() => {

        //intercept dulu untuk men-trigger request ke API, tidak bisa digunakan. kasusnya sama web tidak memberi respon lain
        //cy.intercept('POST', '/web/index.php/auth/login').as('loginRequest')

        //cy.visit login page dulu
        loginPage_OrangeHrm.visit();
    })

    it('TF-001-User menginputkan username valid di field username', () => {

        //cklik button forgot password di halaman login
        loginPage_OrangeHrm.clickforgotpasswordlink()

        //membuka atau memverifikasi yang dibuka di halaman forgot password
        forgotPasswordPage_OrangeHrm.verify_Base_Url_Forgot_Password()

        //input username
        forgotPasswordPage_OrangeHrm.Input_Username(loginData_orangeHrm.valid_Username)

        //click button reset password
        forgotPasswordPage_OrangeHrm.Click_Button_Reset()

        //assert reset password
        forgotPasswordPage_OrangeHrm.verify_Send_Password_Reset()
    })

    it('TF-002-User tidak input username di field username', () => {

        //cklik button forgot password di halaman login
        loginPage_OrangeHrm.clickforgotpasswordlink()
        
        //membuka atau memverifikasi yang dibuka di halaman forgot password
        forgotPasswordPage_OrangeHrm.verify_Base_Url_Forgot_Password()

        //input username
        forgotPasswordPage_OrangeHrm.Null_Username()

        //click button reset password
        forgotPasswordPage_OrangeHrm.Click_Button_Reset()

        //assert username kosong di forgot password
        forgotPasswordPage_OrangeHrm.verify_Username_kosong_Forgot_Password()
    })
})
    describe('fungsional directory', () =>{
        //positif case
        beforeEach(() => {
    
            //cy.visit login page dulu
            loginPage_OrangeHrm.visit();
        })
        it('TD-001-User mencari employee name dengan hanya menginputkan pada field employee yang valid', () =>{
            //memastikan sudah berada di url login orangeHRM
            loginPage_OrangeHrm.Verify_Base_Url_Login() 
            //Input Username
            loginPage_OrangeHrm.Input_Username(loginData_orangeHrm.valid_Username)
            //Input Password
            loginPage_OrangeHrm.Input_Password(loginData_orangeHrm.valid_Password)
            //Click Button
            loginPage_OrangeHrm.Click_Btn_Login()
            //Assert Login
            loginPage_OrangeHrm.Verify_Login_Success()
            //user membuka halaman directory
            directory_OrangeHrm.click_halaman_directory()
            //user memvalidasi sudah berada di halaman directory dengan url dan judul halaman
            directory_OrangeHrm.verify_base_url_directory()
            
            // //User menginputkan employee name invalid di field employee name pada halaman directory
            directory_OrangeHrm.valid_employee_name(loginData_orangeHrm.valid_Employeename)
            
            // Klik nama dari list
            directory_OrangeHrm.click_dropdown_list()

            // User mengklik button search
            directory_OrangeHrm.click_button_search()

            // klik hasil pencarian muncul
            directory_OrangeHrm.click_nama_valid_hasil_pencarian()

            
        })

        it('TD-002-User hanya mencari employee name dengan hanya pada field job title', () =>{
            //memastikan sudah berada di url login orangeHRM
            loginPage_OrangeHrm.Verify_Base_Url_Login() 
            //Input Username
            loginPage_OrangeHrm.Input_Username(loginData_orangeHrm.valid_Username)
            //Input Password
            loginPage_OrangeHrm.Input_Password(loginData_orangeHrm.valid_Password)
            //Click Button
            loginPage_OrangeHrm.Click_Btn_Login()
            //Assert Login
            loginPage_OrangeHrm.Verify_Login_Success()
            //user membuka halaman directory
            directory_OrangeHrm.click_halaman_directory()
            //user memvalidasi sudah berada di halaman directory dengan url dan judul halaman
            directory_OrangeHrm.verify_base_url_directory()

            //intercept dulu untuk men-trigger request ke API (url nya bisa berganti2 di webnya)
            cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0&jobTitleId=22').as('jobtitled')
            
            // User Pilih salah satu Job Title
            directory_OrangeHrm.select_job_title()
            
            // User mengklik button search
            directory_OrangeHrm.click_button_search()

            //mengembalikan response API dari request yg kita kirim
            cy.wait('@jobtitled', {timeout: 10000}).its('response.statusCode').should('eq', 200)

        })

        it('TD-003-User hanya mencari employee name dengan hanya pada field location', () =>{
            //memastikan sudah berada di url login orangeHRM
            loginPage_OrangeHrm.Verify_Base_Url_Login() 
            //Input Username
            loginPage_OrangeHrm.Input_Username(loginData_orangeHrm.valid_Username)
            //Input Password
            loginPage_OrangeHrm.Input_Password(loginData_orangeHrm.valid_Password)
            //Click Button
            loginPage_OrangeHrm.Click_Btn_Login()
            //Assert Login
            loginPage_OrangeHrm.Verify_Login_Success()
            //user membuka halaman directory
            directory_OrangeHrm.click_halaman_directory()
            //user memvalidasi sudah berada di halaman directory dengan url dan judul halaman
            directory_OrangeHrm.verify_base_url_directory()

            //intercept dulu untuk men-trigger request ke API (masih error)
            //cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0&locationId=2').as('location')
            
            //User Pilih salah satu location
            directory_OrangeHrm.select_location

            // User mengklik button search
            directory_OrangeHrm.click_button_search

            //mengembalikan response API dari request yg kita kirim
            //cy.wait('@location', {timeout: 10000}).its('response.statusCode').should('eq', 200)

        })

        it('TD-004-User mencari employee name dengan mongkosongkan field dan langsung mengklik button search', () =>{
            //memastikan sudah berada di url login orangeHRM
            loginPage_OrangeHrm.Verify_Base_Url_Login() 
            //Input Username
            loginPage_OrangeHrm.Input_Username(loginData_orangeHrm.valid_Username)
            //Input Password
            loginPage_OrangeHrm.Input_Password(loginData_orangeHrm.valid_Password)
            //Click Button
            loginPage_OrangeHrm.Click_Btn_Login()
            //Assert Login
            loginPage_OrangeHrm.Verify_Login_Success()
            //user membuka halaman directory
            directory_OrangeHrm.click_halaman_directory()
            //user memvalidasi sudah berada di halaman directory dengan url dan judul halaman
            directory_OrangeHrm.verify_base_url_directory()
            //User menginputkan employee name invalid di field employee name pada halaman directory

            // memberi request pada API 
            cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0').as('offset')
            directory_OrangeHrm.null_employee_name()

            //User mengklik button search
            directory_OrangeHrm.click_button_search()

             //mengembalikan response API dari request yg kita kirim
             cy.wait('@offset', {timeout: 10000}).its('response.statusCode').should('eq', 200)


        })

        it('TD-005-User mencari employee name dengan hanya menginputkan field employee yang tidak invalid', () =>{
            //memastikan sudah berada di url login orangeHRM
            loginPage_OrangeHrm.Verify_Base_Url_Login() 
            //Input Username
            loginPage_OrangeHrm.Input_Username(loginData_orangeHrm.valid_Username)
            //Input Password
            loginPage_OrangeHrm.Input_Password(loginData_orangeHrm.valid_Password)
            //Click Button
            loginPage_OrangeHrm.Click_Btn_Login()
            //Assert Login
            loginPage_OrangeHrm.Verify_Login_Success()
            //user membuka halaman directory
            directory_OrangeHrm.click_halaman_directory()
            //user memvalidasi sudah berada di halaman directory dengan url dan judul halaman
            directory_OrangeHrm.verify_base_url_directory()

            //memberi request ke API (masih error)
            //cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?nameOrId=wrong_username').as('nameinvalid')
            
            //User menginputkan employee name invalid di field employee name pada halaman directory
            directory_OrangeHrm.invalid_employee_name(loginData_orangeHrm.invalid_Employeename)
            
            //User mengklik button search
            directory_OrangeHrm.click_button_search()
            
            //user mendapatkan validasi "required"
            directory_OrangeHrm.verify_error_required()

            //mengembalikan response API dari request yg kita kirim
            //cy.wait('@nameinvalid', {timeout: 10000}).its('response.statusCode').should('eq', 200)

        })

})