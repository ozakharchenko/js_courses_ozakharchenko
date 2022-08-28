const myAccount = require("../pages/myAccount");

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

Before(({ I }) => {
    I.openStore();
});


/*Scenario('create account', ({ I, homePage, authPage, createAccountPage }) => {
homePage.clickSignIn();
authPage.fillRegistrationEmailField(Date.now() + '@test.com');
authPage.clickCreateAccount();
createAccountPage.fillNewAccountFields(user);
createAccountPage.clickRegister();
I.see('MY ACCOUNT');*/


Scenario('buy product', async ({ I, homePage, authPage, myAccountPage, productPage, cartPage }) => {
    homePage.clickSignIn();
    authPage.login();
    myAccountPage.myAccountField();
    I.amOnPage('http://automationpractice.com/index.php?id_product=2&controller=product');
    let productPrice = await productPage.getProductPrice();
    console.log(productPrice);
    // let productPriceNum = Number(productPrice);
    // console.log(productPriceNum);
    productPage.clickAddToCart();
    let shippingPrice = await productPage.getShippingPrice();
    console.log(shippingPrice);
    cartPage.proceedToCheckout();
    // I.assertEqual('productPrice', 'shippingPrice', 'Prices are not in match');







    /*createAccountPage.fillNewAccountFields(user);
    createAccountPage.clickRegister();
    I.see('MY ACCOUNT');*/




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


