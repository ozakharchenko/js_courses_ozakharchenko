const { I } = inject();

module.exports = {
  textMyAcc: ('MY ACCOUNT'),
  

  
  getMyAccountField() {
    I.waitForText(this.textMyAcc);
    I.see(this.textMyAcc);
  }

  // insert your locators and methods here
}
