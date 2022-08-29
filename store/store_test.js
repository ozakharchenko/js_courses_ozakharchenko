const myAccount = require("../pages/myAccount");
const assert = require('assert');

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
    let numberProductPrice = productPrice.slice(1);
    productPage.clickAddToCart();
    let shippingPrice = await cartPage.getShippingPrice();
    console.log(shippingPrice);
    let numberShippingPrice = shippingPrice.slice(1);
    numberProductPrice = Number(numberProductPrice);
    numberShippingPrice = Number(numberShippingPrice);
    let numberTotalPrice = (numberProductPrice + numberShippingPrice);
    numberTotalPrice = Number(numberTotalPrice);
    console.log(numberTotalPrice);
    cartPage.proceedToCheckout();
    let amountPrice = await cartPage.getAmountPrice();
    console.log(amountPrice);
    let numberAmountPrice = amountPrice.slice(1);
    console.log(numberAmountPrice);
    numberAmountPrice = Number(numberAmountPrice);
    console.log(numberAmountPrice);
    // I.assertEqual(numberTotalPrice, numberAmountPrice, 'Prices are not in match');







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


