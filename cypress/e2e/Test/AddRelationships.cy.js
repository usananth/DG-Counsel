import RelationshipPage from "../../PageObjects/RelationshipPage";
import Login from "../../PageObjects/LoginPage";

describe(" Add Relationships Module", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  var data, input, updateDepts;

  before(() => {
    Login.visit();
    cy.fixture("Relationships").then((value) => {
      data = value;
      Login.userName(data.loginData.inputmail);
      Login.userPassword(data.loginData.inputpassword);
      Login.submitBtn();
      input = data.searchFirm.inputSearch;
      //[data.selectDepartments.Dept1, data.selectDepartments.Dept2];
    });
  });
  beforeEach(() => {
    updateDepts = [data.updateDepts.Dept1, data.updateDepts.Dept2];
    RelationshipPage.RelationshipMenu();
    RelationshipPage.AddRelationshipTabs();
  });

  it.only("TestCase: 1.ViewRelationshipTab-UpdateDeptAccess-AlertYes", () => {
    RelationshipPage.SearchbarInput(input);
    RelationshipPage.UpdateDepts(updateDepts);
    RelationshipPage.UpdateDeptSaveBtn();
    RelationshipPage.AlertYesBtn();
    RelationshipPage.AssertDepts(data.assertDepts.deptOne);
    RelationshipPage.AssertDepts(data.assertDepts.deptTwo);
    RelationshipPage.SuccessPopupXBtn();
  });
  it("TestCase: 2.ViewRelationshipTab-UpdateDeptAccess-AlertNo", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.UpdateDepts(updateDepts);
    RelationshipPage.UpdateDeptSaveBtn();
    RelationshipPage.AlertNoBtn();
    RelationshipPage.UpdateDeptCancelBtn();
  });

  it("TestCase: 3.ViewRelationshipTab-UpdateDeptAccess-YesPopupClose", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.UpdateDepts(updateDepts);
    RelationshipPage.UpdateDeptSaveBtn();
    RelationshipPage.AlertYesBtn();
    RelationshipPage.SuccessPopupXBtn();
  });
});
