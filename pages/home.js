const { I } = inject();

module.exports = {
  signInButton: {xpath:"//div[@class='header_user_info']/a"},
  
  clickSignIn() {
    I.click(this.signInButton);
  }

  // insert your locators and methods here
}
