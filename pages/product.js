const { I } = inject();

module.exports = {
  productPrice: { xpath: "//span[@id='our_price_display']" },
  shippingPrice: { xpath: "//span[@class='ajax_cart_shipping_cost']" },
  addToCartButton: { xpath: "//button[@name='Submit']" },





  async getProductPrice() {
    return await I.grabTextFrom(this.productPrice);


    // insert your locators and methods here
  },

  async getShippingPrice() {
    return await I.grabTextFrom(this.shippingPrice)
  },

  async getTotalPrice() {
    return (this.productPrice + this.shippingPrice)
  },


  clickAddToCart() {
    I.click(this.addToCartButton);
    I.waitForText('Product successfully added to your shopping cart');
    I.see('Product successfully added to your shopping cart');
  },

}

