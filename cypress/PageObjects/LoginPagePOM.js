class LoginPageObjects {
  loginEmail = 'input[id="id_email"]';
  loginPassword = 'input[id="id_password"]';
  btnSubmit = 'button[type="submit"]';

  url() {
    cy.visit("http://staging.corp.lauditor.com");
  }

  userEmail(email) {
    cy.get(this.loginEmail).type(email);
  }
  userPassword(password) {
    cy.get(this.loginPassword).type(password);
  }
  submitBtn() {
    cy.get(this.btnSubmit).click();
  }
}
export default LoginPageObjects;
