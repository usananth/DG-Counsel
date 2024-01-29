import DocumentsUploadDept from "../../PageObjects/DocUploadPOM";
import Login from "../../PageObjects/LoginPOM";
const ObjectJson = require("../../fixtures/DocJson.json");
const DocumentsObject = new DocumentsUploadDept();
const login = new Login();

import "cypress-file-upload";
describe("Documents In Departments", () => {
  var data;
  before(() => {
    login.visit();
    cy.fixture("login").then((value) => {
      data = value;
      login.userName(data.loginData.inputmail);
      login.userPassword(data.loginData.inputpassword);
      login.submitBtn();
    });

    // cy.fixture("login").then((value) => {
    //   data = value;
    // });
  });

  it("TestCase: 1.DocumentsUpload-InternalMatter-EnableDownload", () => {
    var selectDepts = [
      data.selectDepartments.Dept1,
      data.selectDepartments.Dept2,
    ];
    var intMatter = data.selectDepartments.selectMatterInt;
    var extMatter = data.selectDepartments.selectMatterExt;
    DocumentsObject.DocsMenuClick();
    DocumentsObject.UploadTabClick();
    DocumentsObject.SelectDeptAdd();
    DocumentsObject.SelectDepts(selectDepts);
    DocumentsObject.SelectDeptMinus();
    DocumentsObject.SelectInternalMatterRadioBtn();
    // DocumentsObject.SelectExternalMatterRadioBtn();
    // DocumentsObject.selectMatterDropdown(intMatter);
    DocumentsObject.SelectMatterDropdown(intMatter);
    DocumentsObject.ClickBrowseBtn();
    DocumentsObject.EnableDownload();
    DocumentsObject.UploadSaveBtn();
  });

  it("TestCase:2.Document-Upload-InternalMatter-EnableDownload-Cancel", () => {
    DocumentsObject.DocsMenuClick();
    DocumentsObject.UploadTabClick();
    DocumentsObject.SelectDeptAdd();
    DocumentsObject.SelectDepts(selectDepts);
    DocumentsObject.SelectDeptMinus();
    //  DocumentsObject.selectInternalMatterRadioBtn();
    DocumentsObject.SelectExternalMatterRadioBtn();
    // DocumentsObject.selectMatterDropdown(intMatter);
    DocumentsObject.SelectMatterDropdown(extMatter);

    DocumentsObject.ClickBrowseBtn();
    DocumentsObject.EnableDownload();
  });
  it("TestCase:3.Document-Upload-InternalMatter-Without-EditData", () => {
    DocumentsObject.DocsMenuClick();
    DocumentsObject.UploadTabClick();
    DocumentsObject.SelectDeptAdd();
    DocumentsObject.SelectDepts(selectDepts);
    DocumentsObject.SelectDeptMinus();
    //  DocumentsObject.selectInternalMatterRadioBtn();
    DocumentsObject.SelectExternalMatterRadioBtn();
    // DocumentsObject.selectMatterDropdown(intMatter);
    DocumentsObject.SelectMatterDropdown(extMatter);

    DocumentsObject.ClickBrowseBtn();
    DocumentsObject.EnableDownload();
  });
  it("TestCase:3.Document-Upload-InternalMatter-Without-EditData-", () => {
    DocumentsObject.DocsMenuClick();
    DocumentsObject.UploadTabClick();
    DocumentsObject.SelectDeptAdd();
    DocumentsObject.SelectDepts(selectDepts);
    DocumentsObject.SelectDeptMinus();
    //  DocumentsObject.selectInternalMatterRadioBtn();
    DocumentsObject.SelectExternalMatterRadioBtn();
    // DocumentsObject.selectMatterDropdown(intMatter);
    DocumentsObject.SelectMatterDropdown(extMatter);

    DocumentsObject.ClickBrowseBtn();
    DocumentsObject.EnableDownload();
  });
});
