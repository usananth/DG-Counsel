import GeneralMeetingsPage from "../../PageObjects/GeneralMeetingsPage";
import Login from "../../PageObjects/LoginPage";

describe("General Events Creations", () => {
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
    GeneralMeetingsPage.DashboardMeetingsMenu();
    GeneralMeetingsPage.MeetingsCreateTab();
  });

  it("TestCase: 1.ExchangeInfo-SharedByUs-UnShared", () => {
    GeneralMeetingsPage.GeneralEventRadioBtn();
  });
});
