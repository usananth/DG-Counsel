/// <reference types="Cypress"/>
import DocumentsUploadDept from "../../PageObjects/DocUploadPOM";
import "cypress-file-upload";
describe("Document Upload Department", () => {
  var data;
  const uploadObject = new DocumentsUploadDept();
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
    //  const uploadObject = new DocumentsUploadDept();
    //  var DocsRename = data.selectDepartments.renameDocs;
    var selectDepts = [
      data.selectDepartments.Dept1,
      data.selectDepartments.Dept2,
    ];
    var DocName = data.docsEdit.renameDocs;
    var DocDesc = data.docsEdit.Description;
    var DocExpDate = data.docsEdit.expDate;

    //  var DocsEdit = [DEdit.renameDocs, DEdit.Description, DEdit.expDate];
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
    uploadObject.DocumentsEdits(DocName, DocDesc, DocExpDate);
  });
});
// var DocsEdit = [
//   DEdit.AllDocuments.renameDocs,
//   DEdit.DocumentsEdit.AllDocuments.Description,
//   DEdit.DocumentsEdit.AllDocuments.expDate,
// ];
//uploadObject.DocumentsEdits();
// uploadObject.DocumentName(DEdit.DocumentsEdit.AllDocuments.renameDocs);
// uploadObject.DescriptionChange(
//   DEdit.DocumentsEdit.AllDocuments.Description
// );
// uploadObject.DatepickerSelection(DEdit.DocumentsEdit.AllDocuments.expDate);
// uploadObject.DocEditSaveBtn();
// uploadObject.UploadBtn();
// uploadObject.ViewChanges();
// uploadObject.DocsNameEditsAssert(
//   DEdit.DocumentsEdit.AllDocuments.renameAssert
// );
// uploadObject.DescChangesAssert(DEdit.DocumentsEdit.AllDocuments.descAssert);
//  uploadObject.UploadDocumentEdit(DocsEdit);

// uploadObject.ExpMonth(ExpDate.expYear);
// uploadObject.ExpDate(ExpDate.expYear);
