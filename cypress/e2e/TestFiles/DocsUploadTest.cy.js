/// <reference types="Cypress"/>
import DocumentsUploadDept from "../../PageObjects/DocUploadPOM";
import "cypress-file-upload";
describe("Document Upload Department", () => {
  var data;

  before(() => {
    cy.visit("http://staging.corp.lauditor.com/login");
    cy.get('input[id="id_email"]').type("gradle.ananth@gmail.com");
    cy.get('input[id="id_password"]').type("Test@123");
    cy.get('button[type="submit"]').click();
    cy.fixture("deptselect").then((value) => {
      data = value;
    });
  });

  it("Documents Menu", () => {
    const uploadObject = new DocumentsUploadDept();
    //  var DocsRename = data.selectDepartments.renameDocs;
    var selectDepts = [
      data.selectDepartments.Dept1,
      data.selectDepartments.Dept2,
    ];
    var ExpDate = [
      data.docsEdit.renameDocs,
      data.docsEdit.Description,
      data.docsEdit.expYear,
      data.docsEdit.expMonth,
      data.docsEdit.expDate,
    ];
    var intMatter = data.selectDepartments.selectMatterInt;
    var extMatter = data.selectDepartments.selectMatterExt;
    uploadObject.DocsMenuClick();
    uploadObject.UploadTabClick();
    uploadObject.SelectDeptAdd();
    uploadObject.SelectDepts(selectDepts);
    uploadObject.SelectDeptMinus();
    //  uploadObject.selectInternalMatterRadioBtn();
    uploadObject.SelectExternalMatterRadioBtn();
    // uploadObject.selectMatterDropdown(intMatter);
    uploadObject.SelectMatterDropdown(extMatter);
    //  uploadObject.EnableDownload();
    uploadObject.ClickBrowseBtn();
    uploadObject.DocumentEdit();
    uploadObject.DocumentName(data.docsEdit.renameDocs);
    uploadObject.DescriptionChange(data.docsEdit.Description);
    uploadObject.DatepickerSelection(data.docsEdit.expDate);
    uploadObject.DocEditSaveBtn();
    uploadObject.UploadBtn();
    uploadObject.ViewChanges();
    uploadObject.DocsNameEditsAssert(data.docsEdit.renameAssert);
    uploadObject.DescChangesAssert(data.docsEdit.descAssert);
    // uploadObject.ExpMonth(ExpDate.expYear);
    // uploadObject.ExpDate(ExpDate.expYear);

    //  cy.get("#btnadd").click();
  });

  //  it.only("Single File Upload", () => {});
});
