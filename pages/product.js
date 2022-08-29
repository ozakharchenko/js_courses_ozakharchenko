const { I } = inject();
// let productPrice = productPage.getProductPrice();
// let numberProductPrice = productPrice.slice(1);


module.exports = {
  productPrice: { xpath: "//span[@id='our_price_display']" },
  addToCartButton: { xpath: "//button[@name='Submit']" },




  async getProductPrice() {
    return await I.grabTextFrom(this.productPrice);
    // function extractCurrencyValue(numberProductPrice) {
        // return +numberProductPrice.slice(1);
        // console.log(numberProductPrice);
  // }


    // insert your locators and methods here
  },


  async getTotalPrice() {
    return (this.productPrice + this.shippingPrice);
  },

  extractCurrencyValue(productPrice) {
    productPrice.splice(1);
  },


  clickAddToCart() {
    I.click(this.addToCartButton);
    I.waitForText('Product successfully added to your shopping cart');
    I.see('Product successfully added to your shopping cart');
  },

}

