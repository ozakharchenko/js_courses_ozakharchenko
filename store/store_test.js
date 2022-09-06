let products = new DataTable(['productLink']);
products.xadd(['http://automationpractice.com/index.php?id_product=3&controller=product']);
products.xadd(['http://automationpractice.com/index.php?id_product=4&controller=product']);
products.xadd(['http://automationpractice.com/index.php?id_product=5&controller=product']);

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

/*const fileReader = require('C:/Users/ozakharchenko/js_courses_ozakharchenko/js_courses_ozakharchenko/helpers/fileReader.js');
let productLinks = fileReader.readContentFromFile('./input/product_link.txt');
let productLinksArray = productLinks.split('\r\n');
console.log(productLinksArray);
let arrayOfObjects = fileReader.getArrayOfProductLinkObjects(productLinksArray);
console.log(arrayOfObjects);

Data(arrayOfObjects).Scenario('buy product', async ({ I, current }) => {
    console.log(current.productLink);
    // I.grabTextFrom();*/


/*Scenario('custom helpers', async ({ I, tryToHelper, homePage, authPage, createAccountPage }) => {
    I.openStoreFromHelper();
    console.log(await I.getRandomEmail());
    console.log(await I.getRandomPassword(10000, 99999999));
    I.amOnPage('http://automationpractice.com/index.php?id_product=2&controller=product');
    const result = await tryToHelper.checkElementIsVisible({ xpath: "//button[@name='Submit']" });
    console.log(result);
    if (result) {
        I.click({ xpath: "//button[@name='Submit']" });
    } else {
        console.error('Add to cart is not available');
    }*/


/*Scenario('create account', ({ I, homePage, authPage, createAccountPage }) => {
    homePage.clickSignIn();
    authPage.fillRegistrationEmailField(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    createAccountPage.clickRegister();
    I.see('MY ACCOUNT');
});*/


Scenario('buy product', async ({ I, homePage, authPage, myAccountPage, productPage, cartPage }) => {
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
    let response = await I.sendGetRequest('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json');
    console.log(response.data[0].rate);
    let uahAmount = (totalAmount * response.data[0].rate);
    console.log(Math.round(uahAmount));
    cartPage.proceedToCheckout();
    let orderReference = await cartPage.getReferenceOrder();
    console.log(orderReference);
    






});



