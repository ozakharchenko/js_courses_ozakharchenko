const { I } = inject();

module.exports = {
  emailInput: ({xpath:"//input[@id='email_create']"}),
  createAccountButton: ({xpath:"//button[@id='SubmitCreate']"}),

  fillEmailField(email) {
    I.waitForVisible(this.emailInput);
    I.fillField(this.emailInput, email)
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  }

  // insert your locators and methods here
}
