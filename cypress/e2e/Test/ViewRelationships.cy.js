import RelationshipPage from "../../PageObjects/RelationshipPage";
import Login from "../../PageObjects/LoginPage";

describe("View Relationships Module", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  var data, input, updateGroups;

  before(() => {
    Login.visit();
    cy.fixture("Relationships").then((value) => {
      data = value;
      Login.userName(data.loginData.inputmail);
      Login.userPassword(data.loginData.inputpassword);
      Login.submitBtn();
      input = data.searchFirm.viewSearch;
    });
  });
  beforeEach(() => {
    updateGroups = [data.updateDepts.deptOne, data.updateDepts.deptTwo];
    RelationshipPage.RelationshipMenu();
    RelationshipPage.ViewRelationshipTabs();
  });

  it.only("TestCase: 1.ViewRelationshipTab-UpdateDeptAccess-AlertYes", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.UpdateDepts(updateGroups);
    RelationshipPage.UpdateDeptSaveBtn();
    RelationshipPage.AlertYesBtn();
    RelationshipPage.AssertDepts(data.assertDepts.deptOne);
    RelationshipPage.AssertDepts(data.assertDepts.deptTwo);
    RelationshipPage.SuccessPopupXBtn();
  });
  it("TestCase: 2.ViewRelationshipTab-UpdateDeptAccess-AlertNo", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.UpdateDepts(updateGroups);
    RelationshipPage.UpdateDeptSaveBtn();
    RelationshipPage.AlertNoBtn();
    RelationshipPage.UpdateDeptCancelBtn();
  });

  it("TestCase: 3.ViewRelationshipTab-UpdateDeptAccess-YesPopupClose", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.UpdateDepts(updateGroups);
    RelationshipPage.UpdateDeptSaveBtn();
    RelationshipPage.AlertYesBtn();
    RelationshipPage.SuccessPopupXBtn();
  });
});
