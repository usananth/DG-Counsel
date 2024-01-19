class DocsEdit {
  loginEmail = 'input[id="id_email"]';
  loginPassword = 'input[id="id_password"]';
  btnSubmit = 'button[type="submit"]';
  lblDashboard = 'span[class="headtitle"]';

  userEmail(email) {
    cy.get(this.loginEmail).type(email);
  }
  userPassword(password) {
    cy.get(this.loginPassword).type(password);
  }
  clickSubmit() {
    cy.get(this.btnSubmit).click();
  }
  verifyLogin() {
    cy.get(this.lblDashboard).should("have.text", "Dashboard");
  }
}
export default Login;
