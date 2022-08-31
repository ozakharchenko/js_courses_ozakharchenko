const { I } = inject();



module.exports = {
  productPrice: { xpath: "//span[@id='our_price_display']" },
  addToCartButton: { xpath: "//button[@name='Submit']" },
  textAddToCart: ('Product successfully added to your shopping cart'),



  async getProductPrice() {
    let productPrice = await I.grabTextFrom(this.productPrice);
    let numberProductPrice = productPrice.slice(1);
    return Number(numberProductPrice);

  },


  clickAddToCart() {
    I.click(this.addToCartButton);
    I.waitForText(this.textAddToCart);
    I.see(this.textAddToCart);
  },

}
