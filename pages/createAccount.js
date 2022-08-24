const { I } = inject();

module.exports = {
  firstNameInput: ({xpath:"//input[@id='customer_firstname']"}),
  lastNameInput: ({xpath:"//input[@id='customer_lastname']"}),
  passwordInput: ({xpath:"//input[@id='passwd']"}),
  addressFirstNameInput: ({xpath:"//input[@id='firstname']"}),
  addressLastNameInput: ({xpath:"//input[@id='lastname']"}),
  addressInput: ({xpath:"//input[@id='address1']"}),
  cityInput: ({xpath:"//input[@id='city']"}),
  stateDropdown: ({xpath:"//select[@id='id_state']"}),
  postalCodeInput: ({xpath:"//input[@id='postcode']"}),
  mobilePhoneInput: ({xpath:"//input[@id='phone_mobile']"}),
  registerButton: ({xpath:"//button[@id='submitAccount']"}),

  // titleInput: ({xpath:"//input[@name='id_gender']"}),

  fillNewAccountFields(user) {
    I.waitForVisible(this.firstNameInput);
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.fillField(this.passwordInput, user.password);
    I.fillField(this.addressFirstNameInput, user.firstName);
    I.fillField(this.addressLastNameInput, user.lastName);
    I.fillField(this.addressInput, user.address);
    I.fillField(this.cityInput, user.city);
    I.click(this.stateDropdown);
    I.selectOption(this.stateDropdown, user.state);
    I.fillField(this.postalCodeInput, user.postalCode);
    I.fillField(this.mobilePhoneInput, user.mobilePhone);
    // I.selectOption(this.titleInput, user.title);
  },

    clickRegister() {
      I.click(this.registerButton);
    }
  


  }

  // insert your locators and methods here

