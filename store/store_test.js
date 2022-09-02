
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


Scenario('create account', ({ I, homePage, authPage, createAccountPage }) => {
    homePage.clickSignIn();
    authPage.fillRegistrationEmailField(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    createAccountPage.clickRegister();
    I.see('MY ACCOUNT');
});


/*Scenario('buy product', async ({ I, homePage, authPage, myAccountPage, productPage, cartPage }) => {
    homePage.clickSignIn();
    authPage.login('test1111111@test.com', '12345');
    myAccountPage.getMyAccountField();
    I.amOnPage('http://automationpractice.com/index.php?id_product=2&controller=product');
    let productPrice = await productPage.getProductPrice();
    console.log(productPrice);
    productPage.clickAddToCart();
    let shippingPrice = await cartPage.getShippingPrice();
    console.log(shippingPrice);
    numberTotalPrice = (productPrice + shippingPrice);
    console.log(numberTotalPrice);
    let totalAmount = await cartPage.getTotalAmount();
    console.log(totalAmount);
    I.assertEqual(numberTotalPrice, totalAmount, 'Prices are not in match');
    cartPage.proceedToCheckout();
    let orderReference = await cartPage.getReferenceOrder();
    console.log(orderReference);



});

*/
