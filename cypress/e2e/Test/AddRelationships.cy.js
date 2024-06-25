import RelationshipPage from "../../PageObjects/RelationshipPage";
import Login from "../../PageObjects/LoginPage";

describe(" Add Relationships Module", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  var data, input;

  before(() => {
    Login.visit();
    cy.fixture("Relationships").then((value) => {
      data = value;
      Login.userName(data.loginData.inputmail);
      Login.userPassword(data.loginData.inputpassword);
      Login.submitBtn();
      input = data.searchFirm.inputSearch;
    });
  });
  beforeEach(() => {
    RelationshipPage.RelationshipMenu();
    RelationshipPage.AddRelationshipTabs();
  });

  it("TestCase: 1.AddRelationshipTab-MenuClick", () => {
    RelationshipPage.SearchbarInput(input);
  });
});
