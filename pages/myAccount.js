const { I } = inject();

module.exports = {
  accountField: ({xpath:"//div[@id='center_column']/h1"}),
  
  
  MyAccountField() {
    I.waitForVisible(this.accountField);
    I.see(this.accountField)
  }

  // insert your locators and methods here
}
