const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'store/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      timeout: 25000,
      waitForTimeout: 15000,
      waitForNavigation: 'networkidle'
    },
    "ChaiWrapper": {
      require: "codeceptjs-chai"
    },
    HelpersTest: {
      require: './helpers/helpersTest.js',
    },
    REST: {
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
    JSONResponse: {},
    FileSystem: {
    },
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    authPage: './pages/auth.js',
    createAccountPage: './pages/createAccount.js',
    myAccountPage: './pages/myAccount.js',
    productPage: './pages/product.js',
    cartPage: './pages/cart.js',
    tryToHelper: './helpers/tryToHelper.js',
  },
  name: 'js_courses_ozakharchenko'
}