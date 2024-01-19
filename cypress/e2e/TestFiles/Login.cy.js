/// <reference types="Cypress"/>
import Login from "../../PageObjects/LoginPageObjects.js";
describe("Login Page", () => {
  it.only("Landing Page", () => {
    cy.visit("http://staging.corp.lauditor.com/login");
    cy.fixture("login").then((data) => {
      const logObj = new Login();
      logObj.userEmail(data.inputmail);
      logObj.userPassword(data.inputpassword);
      logObj.submitBtn();
    });
  });
});
export default Login;
