class LoginPOM {
  loginElements = {
    userEmail: () => cy.get("input#id_email"),
    userPasswrod: () => cy.get("input#id_password"),
    loginBtn: () => cy.get('button[type="submit"]'),
  };
  visit() {
    cy.visit("http://staging.corp.lauditor.com/login");
  }

  userName(name) {
    this.loginElements.userEmail().type(name);
  }

  userPassword(pass) {
    this.loginElements.userPasswrod().type(pass);
  }

  submitBtn() {
    this.loginElements.loginBtn().click();
  }
}
export default LoginPOM;
