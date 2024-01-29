/// <reference types="Cypress"/>
import Login from "../../PageObjects/LoginPOM";
describe("Login Page", () => {
  var data;
  it("Landing Page", () => {
    cy.fixture("login").then((value) => {
      data = value;
      Login.userEmail(data.loginData.inputmail);
      Login.userPassword(data.loginData.inputpassword);
      Login.submitBtn();
    });
  });
});
export default Login;
