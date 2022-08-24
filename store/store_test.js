let user = {
    firstName: 'Oleg',
    lastName: 'Kovpak',
    password: '12345',
    address: 'Park Avenue, 09',
    city: 'Greentown',
    state: 'Alabama',
    postalCode: '12345',
    mobilePhone: '123456789',
    title: 'Mr.',
}


Feature('store');

Scenario('test something', ({ I, homePage, authPage, createAccountPage }) => {
I.openStore();
homePage.clickSignIn();
authPage.fillEmailField(Date.now() + '@test.com');
authPage.clickCreateAccount();
createAccountPage.fillNewAccountFields(user);
createAccountPage.clickRegister();
I.see('MY ACCOUNT');
/*I.click('Sign In');
I.click ({xpath:"//div[@class='header_user_info']/a"});
// pause();
I.waitForVisible ({xpath:"//input[@id='email_create']"});
I.fillField({xpath:"//input[@id='email_create']"}, '24082022@test.com')*/
});

/*Scenario('grab', async ({ I }) => {
    I.amOnPage('http://automationpractice.com/index.php?id_product=1&controller=product');
    let price = await I.grabTextFrom ({xpath:"//span[@id='our_price_display']"});
    console.log(price); 
    // pause();
});*/    
