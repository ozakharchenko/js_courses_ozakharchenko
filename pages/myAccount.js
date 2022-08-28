const { I } = inject();

module.exports = {
  
  myAccountField() {
    I.waitForText('MY ACCOUNT');
    I.see('MY ACCOUNT');
  }

  // insert your locators and methods here
}
