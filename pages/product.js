const { I } = inject();



module.exports = {
  productPrice: { xpath: "//span[@id='our_price_display']" },
  addToCartButton: { xpath: "//button[@name='Submit']" },



  async getProductPrice() {
    let productPrice = await I.grabTextFrom(this.productPrice);
    let numberProductPrice = productPrice.slice(1);
    return Number(numberProductPrice);

  },


  clickAddToCart() {
    I.click(this.addToCartButton);
    I.waitForText('Product successfully added to your shopping cart');
    I.see('Product successfully added to your shopping cart');
  },

}

// function extractCurrencyValue(numberProductPrice) {
  // return +numberProductPrice.slice(1);
  // console.log(numberProductPrice);