const Helper = require('@codeceptjs/helper');

class HelpersTest extends Helper {

  async openStoreFromHelper() {
    await this.helpers['Playwright'].amOnPage('http://automationpractice.com/index.php');
  }

  async getRandomPassword (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

  }
  
  async getRandomEmail () {
    return Date.now() + '@test.com';

  }

  async getNumericalPrice () {
    
  }



  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = HelpersTest;
