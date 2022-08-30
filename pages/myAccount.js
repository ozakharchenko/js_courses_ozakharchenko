const { I } = inject();

module.exports = {
  
  getMyAccountField() {
    I.waitForText('MY ACCOUNT');
    I.see('MY ACCOUNT');
  }

  // insert your locators and methods here
}
