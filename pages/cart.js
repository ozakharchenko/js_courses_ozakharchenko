const { I } = inject();

module.exports = {
  proceedToCheckoutButton: { xpath: "//a[@title='Proceed to checkout']" },
  summaryProceedToCheckoutButton: { xpath: "//p[@class='cart_navigation clearfix']//a[@title='Proceed to checkout']" },
  addressesProceedToCheckoutButton: { xpath: "//button[@name='processAddress']" },
  shippingProceedToCheckoutButton: { xpath: "//button[@name='processCarrier']" },
  payByBankwireButton: { xpath: "//a[@class='bankwire']" },
  confirmMyOrderButton: { xpath: "//p[@class='cart_navigation clearfix']//button[@type='submit']" },
  shippingPrice: { xpath: "//span[@class='ajax_cart_shipping_cost']" },
  totalAmount: { xpath: "//span[@class='ajax_block_cart_total']" },
  orderReference: { xpath: "//div[@class='box']" },
  confirmAccount: { xpath: "//div[@class='box']//span" },
  textShopSummary: ('SHOPPING-CART SUMMARY'),
  textAddresses: ('ADDRESSES'),
  textShipping: ('SHIPPING'),
  textChoosePayMethod: ('PLEASE CHOOSE YOUR PAYMENT METHOD'),
  textOrderSummary: ('ORDER SUMMARY'),
  textOrderConfirm: ('ORDER CONFIRMATION'),







  async getShippingPrice() {
    let shippingPrice = await I.grabTextFrom(this.shippingPrice)
    let numberShippingPrice = shippingPrice.slice(1);
    return Number(numberShippingPrice);

  },


  async getTotalAmount() {
    let totalAmount = await I.grabTextFrom(this.totalAmount);
    let numberTotalAmount = totalAmount.slice(1);
    return Number(numberTotalAmount);

  },


  clickProceedToCheckout() {
    I.click(this.proceedToCheckoutButton);
    I.waitForText(this.textShopSummary);
    I.see(this.textShopSummary);
  },

  clickSummaryProceedToCheckout() {
    I.click(this.summaryProceedToCheckoutButton);
    I.waitForText(this.textAddresses);
    I.see(this.textAddresses);
  },

  clickAddressesProceedToCheckout() {
    I.click(this.addressesProceedToCheckoutButton);
    I.waitForText(this.textShipping);
    I.see(this.textShipping);
  },

  checkAgreeTerms() {
    I.checkOption('I agree to the terms of service and will adhere to them unconditionally.')
  },

  clickShippingProceedToCheckout() {
    I.click(this.shippingProceedToCheckoutButton);
    I.waitForText(this.textChoosePayMethod);
    I.see(this.textChoosePayMethod);
  },

  clickPayByBankwire() {
    I.click(this.payByBankwireButton);
    I.waitForText(this.textOrderSummary);
    I.see(this.textOrderSummary);
  },

  clickConfirmMyOrder() {
    I.click(this.confirmMyOrderButton);
    I.waitForText(this.textOrderConfirm);
    I.see(this.textOrderConfirm);
  },


  proceedToCheckout() {
    this.clickProceedToCheckout();
    this.clickSummaryProceedToCheckout();
    this.clickAddressesProceedToCheckout();
    this.checkAgreeTerms();
    this.clickShippingProceedToCheckout();
    this.clickPayByBankwire();
    this.clickConfirmMyOrder();

  },

  async getReferenceOrder() {
    let orderReference = await I.grabTextFromAll(this.orderReference);
    let numOrderRef = orderReference.join();
    let orderRefNum = numOrderRef.search("order reference")
    let numberOrderRef = numOrderRef.slice(orderRefNum + 15, orderRefNum + 25);
    return numberOrderRef;

  },














  // insert your locators and methods here
}
