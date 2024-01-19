/// <reference types="Cypress"/>
import Login from "../../PageObjects/LoginPagePOM.js";
describe("Login Page", () => {
  var data;
  beforeEach(() => {
    Login.visit();
    cy.fixture("login").then((value) => {
      data = value;
      Login.userEmail(data.loginData.inputmail);
      Login.userPassword(data.loginData.inputpassword);
      Login.submitBtn();
    });
  });
});

export default Login;
