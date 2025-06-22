describe('fungsional login', () =>{
    //positive case
    it('TL-001-User menginputkan username & password yang valid',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin').should('have.value','Admin')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin123').should('have.value','admin123')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.url().should('include','/web/index.php/dashboard/index')
        cy.wait(2000) // sementara buat debug
        cy.get('h6').should('contain.text', 'Dashboard');

    });

    //negative case
    it('TL-002-User tidak menginputkan username dan password',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().should('not.have.value')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().should('not.have.value')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.wait(2000) // tunggu render error message (opsional untuk debug)

        cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('contain.text', 'Required')

    });

    it('TL-003-User menginputkan username valid & password yang invalid',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin').should('have.value','Admin')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin').should('have.value','admin')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.wait(2000) // tunggu render error message (opsional untuk debug)

        cy.get('.oxd-alert.oxd-alert--error').should('contain.text','Invalid credentials')

    });

    it('TL-004-User menginputkan username invalid & password valid',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin123').should('have.value','Admin123')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin123').should('have.value','admin123')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.wait(2000) // tunggu render error message (opsional untuk debug)

        cy.get('.oxd-alert.oxd-alert--error').should('contain.text','Invalid credentials')

    });

    it('TL-005-User hanya mengiputkan password dan tidak menginputkan username',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().should('not.have.value')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin123').should('have.value','admin123')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.wait(2000) // tunggu render error message (opsional untuk debug)

        cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('contain.text', 'Required')

    });

    it('TL-006-User hanya menginputkan username dan tidak menginputkan password', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin').should('have.value','Admin')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().should('not.have.value')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.wait(2000) // tunggu render error message (opsional untuk debug)

        cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('contain.text', 'Required')

    });

    it('TL-007-User menginputkan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin12').should('have.value','Admin12')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin12').should('have.value','admin12')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.wait(2000) // tunggu render error message (opsional untuk debug)

        cy.get('.oxd-alert.oxd-alert--error').should('contain.text','Invalid credentials')

    });
}); 

describe('fungsional forgot password', () =>{
    //positive case
    it('TF-001-User menginputkan username valid di field username', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        //click button forgot password dulu di halaman login
        cy.xpath('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').should('be.visible')
        cy.xpath('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click()


        //visit ke halaman forgot password
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        cy.url().should('include','requestPasswordResetCode')
        cy.get('h6').should('contain.text','Reset Password')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin').should('have.value','Admin')

        cy.xpath('//button[normalize-space()="Reset Password"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Reset Password"]').click()

        cy.url().should('include','/web/index.php/auth/sendPasswordReset')
        cy.wait(2000) // sementara buat debug
        cy.get('h6').should('contain.text', 'Reset Password link sent successfully');
        
    })

    //negatif case
    it('TF-002-User tidak input username di field username', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        //click button forgot password dulu di halaman login
        cy.xpath('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').should('be.visible')
        cy.xpath('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click()

        //visit ke halaman forgot password
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        cy.url().should('include','requestPasswordResetCode')
        cy.get('h6').should('contain.text','Reset Password')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().should('not.have.value')

        cy.xpath('//button[normalize-space()="Reset Password"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Reset Password"]').click()

        cy.wait(2000) // sementara buat debug
        cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('contain.text', 'Required');


    })
})

describe('fungsional directory', () =>{
    //positif case
    it.only('TD-001-User mencari employee name dengan hanya menginputkan pada field employee yang valid',() =>{

        //pertama masuk user membuka web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //user membuka halaman login
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        //user melakukan login
        //inpt usernmae
        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin').should('have.value','Admin')

        //input password
        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin123').should('have.value','admin123')

        //click button login
        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        //user berhasil login dan masuk ke halaman dashboard
        cy.url().should('include','/web/index.php/dashboard/index')
        cy.wait(2000) // sementara buat debug
        cy.get('h6').should('contain.text', 'Dashboard');

        //user membuka halaman directory
        cy.xpath('//span[text()="Directory"]').should('be.visible').click();

        //user memvalidasi sudah berada di halaman directory dengan url dan judul halaman
        cy.url().should('include','/web/index.php/directory/viewDirectory')
        cy.xpath('//h6[normalize-space()="Directory"]').should('contain.text', 'Directory')
        
        //User menginputkan employee name invalid di field employee name pada halaman directory
        cy.xpath('//input[@placeholder="Type for hints..."]').should('be.visible')
        cy.xpath('//input[@placeholder="Type for hints..."]').clear().type('Y')

        // Klik nama dari list
        cy.get('.oxd-autocomplete-dropdown').should('be.visible')
        cy.get('.oxd-autocomplete-option').contains('Yousef Omer Kmail').click()

        //User mengklik button search
        cy.xpath('//button[normalize-space()="Search"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Search"]').click()
        cy.wait(2000)

        // klik hasil pencarian muncul
        cy.get('.orangehrm-directory-card-header').should('contain', 'Yousef Omer Kmail').click()
        })

    it('TD-002-User hanya mencari employee name dengan hanya pada field job title',() =>{

        //pertama masuk user membuka web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //user membuka halaman login
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        //user melakukan login
        //inpt usernmae
        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin').should('have.value','Admin')

        //input password
        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin123').should('have.value','admin123')

        //click button login
        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        //user berhasil login dan masuk ke halaman dashboard
        cy.url().should('include','/web/index.php/dashboard/index')
        cy.wait(2000) // sementara buat debug
        cy.get('h6').should('contain.text', 'Dashboard');

        //user membuka halaman directory
        cy.xpath('//span[text()="Directory"]').should('be.visible').click();

        //user memvalidasi sudah berada di halaman directory dengan url dan judul halaman
        cy.url().should('include','/web/index.php/directory/viewDirectory')
        cy.xpath('//h6[normalize-space()="Directory"]').should('contain.text', 'Directory')

        // User Pilih salah satu Job Title (misal "Account Assistant")
        cy.get('div.oxd-select-wrapper').eq(0).click() // dropdown pertama (Job Title)
        cy.get('.oxd-select-dropdown > *').contains('Account Assistant').click()

        //User mengklik button search
        cy.xpath('//button[normalize-space()="Search"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Search"]').click()
        cy.wait(2000)

    })

    it('TD-003-User hanya mencari employee name dengan hanya pada field location',() =>{

        //pertama masuk user membuka web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //user membuka halaman login
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        //user melakukan login
        //inpt usernmae
        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin').should('have.value','Admin')

        //input password
        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin123').should('have.value','admin123')

        //click button login
        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        //user berhasil login dan masuk ke halaman dashboard
        cy.url().should('include','/web/index.php/dashboard/index')
        cy.wait(2000) // sementara buat debug
        cy.get('h6').should('contain.text', 'Dashboard');

        //user membuka halaman directory
        cy.xpath('//span[text()="Directory"]').should('be.visible').click();

        //user memvalidasi sudah berada di halaman directory dengan url dan judul halaman
        cy.url().should('include','/web/index.php/directory/viewDirectory')
        cy.xpath('//h6[normalize-space()="Directory"]').should('contain.text', 'Directory')

        // User Pilih salah satu location (misal "New York Sales Office")
        cy.get('div.oxd-select-wrapper').eq(1).click() // dropdown pertama (Job Title)
        cy.get('.oxd-select-dropdown > *').contains('New York Sales Office').click()

        //User mengklik button search
        cy.xpath('//button[normalize-space()="Search"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Search"]').click()
        cy.wait(2000)

    })

    it('TD-TD-004-User mencari employee name dengan mongkosongkan field dan langsung mengklik button search',() =>{

        //pertama masuk user membuka web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //user membuka halaman login
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        //user melakukan login
        //inpt usernmae
        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin').should('have.value','Admin')

        //input password
        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin123').should('have.value','admin123')

        //click button login
        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        //user berhasil login dan masuk ke halaman dashboard
        cy.url().should('include','/web/index.php/dashboard/index')
        cy.wait(2000) // sementara buat debug
        cy.get('h6').should('contain.text', 'Dashboard');

        //user membuka halaman directory
        cy.xpath('//span[text()="Directory"]').should('be.visible').click();

        //user memvalidasi sudah berada di halaman directory dengan url dan judul halaman
        cy.url().should('include','/web/index.php/directory/viewDirectory')
        cy.xpath('//h6[normalize-space()="Directory"]').should('contain.text', 'Directory')

        //User menginputkan employee name invalid di field employee name pada halaman directory
        cy.xpath('//input[@placeholder="Type for hints..."]').should('be.visible')
        cy.xpath('//input[@placeholder="Type for hints..."]').clear().should('not.have.value')

        //User mengklik button search
        cy.xpath('//button[normalize-space()="Search"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Search"]').click()
        cy.wait(2000)

    })

    //negatif case
    it('TD-005-User mencari employee name dengan hanya menginputkan field employee yang tidak invalid',() =>{

        //pertama masuk user membuka web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //user membuka halaman login
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        //user melakukan login
        //inpt usernmae
        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin').should('have.value','Admin')

        //input password
        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin123').should('have.value','admin123')

        //click button login
        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        //user berhasil login dan masuk ke halaman dashboard
        cy.url().should('include','/web/index.php/dashboard/index')
        cy.wait(2000) // sementara buat debug
        cy.get('h6').should('contain.text', 'Dashboard');

        //user membuka halaman directory
        cy.xpath('//span[text()="Directory"]').should('be.visible').click();

        //user memvalidasi sudah berada di halaman directory dengan url dan judul halaman
        cy.url().should('include','/web/index.php/directory/viewDirectory')
        cy.xpath('//h6[normalize-space()="Directory"]').should('contain.text', 'Directory')
        
        //User menginputkan employee name invalid di field employee name pada halaman directory
        cy.xpath('//input[@placeholder="Type for hints..."]').should('be.visible')
        cy.xpath('//input[@placeholder="Type for hints..."]').clear().type('wrong_employee').should('have.value' , 'wrong_employee')

        //User mengklik button search
        cy.xpath('//button[normalize-space()="Search"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Search"]').click()
        cy.wait(2000)

        //user mendapatkan validasi "required"
        cy.xpath('//span[@class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
        .should('contain.text', 'Invalid')



    });
    
})