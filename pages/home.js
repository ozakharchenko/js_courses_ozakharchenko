const { I } = inject();

module.exports = {
  SignInButton: ({xpath:"//div[@class='header_user_info']/a"}),
  
  clickSignIn() {
    I.click(this.SignInButton);
  }

  // insert your locators and methods here
}
