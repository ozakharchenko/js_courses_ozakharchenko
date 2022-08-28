const { I } = inject();

module.exports = {
  registerEmailInput: { xpath: "//input[@id='email_create']" },
  createAccountButton: { xpath: "//button[@id='SubmitCreate']" },
  emailInput: { xpath: "//input[@id='email']" },
  passwordInput: { xpath: "//input[@id='passwd']" },
  signInButton: { xpath: "//button[@id='SubmitLogin']" },


  fillRegistrationEmailField(email) {
    I.waitForVisible(this.registerEmailInput);
    I.fillField(this.registerEmailInput, email)
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },

  waitforPageLoad() {
    I.waitForVisible(this.emailInput);
  },

  login(email, password) {
    this.waitforPageLoad();
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickSingIn();
  },

  fillEmail(email) {
    I.fillField(this.emailInput, 'test1111111@test.com');
  },

  fillPassword(password) {
    I.fillField(this.passwordInput, '12345');
  },

  clickSingIn() {
    I.click(this.signInButton);
  }

  // insert your locators and methods here
}
