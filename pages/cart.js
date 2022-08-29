const { I } = inject();

module.exports = {
  proceedToCheckoutButton: { xpath: "//a[@title='Proceed to checkout']" },
  summaryProceedToCheckoutButton: { xpath: "//p[@class='cart_navigation clearfix']//a[@title='Proceed to checkout']" },
  addressesProceedToCheckoutButton: { xpath: "//button[@name='processAddress']" },
  shippingProceedToCheckoutButton: { xpath: "//button[@name='processCarrier']" },
  payByBankwireButton: { xpath: "//a[@class='bankwire']" },
  confirmMyOrderButton: { xpath: "//p[@class='cart_navigation clearfix']//button[@type='submit']" },
  shippingPrice: { xpath: "//span[@class='ajax_cart_shipping_cost']" },
  amountPrice: { xpath: "//span[@class='price']" },



  async getShippingPrice() {
    return await I.grabTextFrom(this.shippingPrice)

  },

  async getAmountPrice() {
    return await I.grabTextFrom(this.amountPrice)

  },


  clickProceedToCheckout() {
    I.click(this.proceedToCheckoutButton);
    I.waitForText('SHOPPING-CART SUMMARY');
    I.see('SHOPPING-CART SUMMARY');
  },

  clickSummaryProceedToCheckout() {
    I.click(this.summaryProceedToCheckoutButton);
    I.waitForText('ADDRESSES');
    I.see('ADDRESSES');
  },

  clickAddressesProceedToCheckout() {
    I.click(this.addressesProceedToCheckoutButton);
    I.waitForText
    I.see('SHIPPING');
  },

  checkAgreeTerms() {
    I.checkOption('I agree to the terms of service and will adhere to them unconditionally.')
  },

  clickShippingProceedToCheckout() {
    I.click(this.shippingProceedToCheckoutButton);
    I.waitForText('PLEASE CHOOSE YOUR PAYMENT METHOD');
    I.see('PLEASE CHOOSE YOUR PAYMENT METHOD');
  },

  clickPayByBankwire() {
    I.click(this.payByBankwireButton);
    I.waitForText('ORDER SUMMARY');
    I.see('ORDER SUMMARY');
  },

  clickConfirmMyOrder() {
    I.click(this.confirmMyOrderButton);
    I.waitForText('ORDER CONFIRMATION');
    I.see('ORDER CONFIRMATION');
  },


  proceedToCheckout() {
    this.clickProceedToCheckout();
    this.clickSummaryProceedToCheckout();
    this.clickAddressesProceedToCheckout();
    this.checkAgreeTerms();
    this.clickShippingProceedToCheckout();
    this.clickPayByBankwire();
    this.clickConfirmMyOrder();

  }









  // insert your locators and methods here
}
