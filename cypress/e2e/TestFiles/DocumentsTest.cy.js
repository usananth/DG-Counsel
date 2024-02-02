import DocumentsUpload from "../../PageObjects/DocumentsPage";
import Login from "../../PageObjects/LoginPage";
const Documents = new DocumentsUpload();
const login = new Login();
import "cypress-file-upload";
describe("Documents In Departments", () => {
  var data;
  var selectDepts, intMatter, extMatter, addTagsType, addTagsName;
  before(() => {
    login.visit();
    cy.fixture("Documents").then((value) => {
      data = value;
      login.userName(data.loginData.inputmail);
      login.userPassword(data.loginData.inputpassword);
      login.submitBtn();
    });
  });
  beforeEach(() => {
    selectDepts = [data.selectDepartments.Dept1, data.selectDepartments.Dept2];
    intMatter = data.selectDepartments.selectMatterInt;
    extMatter = data.selectDepartments.selectMatterExt;
    addTagsType = data.addTagsType.tagsType;
    addTagsName = data.addTagsName.tagInput;
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.SelectDeptAdd();
    Documents.SelectDepts(selectDepts);
    Documents.SelectDeptMinus();
    // Documents.SelectInternalMatterRadioBtn();
  });
  it("TestCase: 1.Documents-IntMat-Upload-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    cy.wait(2000);
    Documents.DocsNameAssert(data.documentsAssert.DocumentName1);
  });
  it("TestCase: 2.Documents-IntMat-Upload-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.UploadCancelBtn();
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });
  it("TestCase:3.Documents-IntMat-EnaDown-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    cy.wait(2000);
    Documents.DocsNameAssert(data.documentsAssert.DocumentName1);

    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });

  it("TestCase:4.Documents-IntMat-EnaDown-ViewChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.UploadCancelBtn();
  });
  it("TestCase:5.Document-IntMat-EnaDown-AddTags-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.addTagsName.DocumentName1);
  });
  it("TestCase:6.Document-IntMat-EnaDown-AddTags Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it("TestCase: 7.Documents-IntMat-UploadMore-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.uploadMore.DocumentName1);
  });
  it("TestCase: 8.Documents-IntMat-UploadMore-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadCancelBtn();
  });
  it("TestCase: 9.Documents-IntMat-UploadMore-EnaDown-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.uploadMore.DocumentName1);
  });
  it("TestCase: 10.Documents-IntMat-UploadMore-EnaDown-ViewChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadCancelBtn();
  });
  it("TestCase:11.Document-IntMat-EnaDown-AddTags-UploadMore-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.uploadMore.DocumentName1);
  });
  it("TestCase:12.Document-IntMat-EnaDown-AddTags-UploadMore-ViewChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    Documents.EnableDownload();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it.only("TestCase: 13.Documents-IntMat-Upload-EnaEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableEncryption();
    // Documents.UploadSaveBtn();
    cy.wait(2000);
    Documents.ViewChanges();
    cy.wait(2000);
    Documents.DocsNameAssert(data.documentsAssert.DocumentName1);
    cy.scrollTo("top");
  });
  it.only("TestCase: 14.Documents-IntMat-Upload-EnaEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableEncryption();
    Documents.UploadCancelBtn();
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });
  it.only("TestCase:15.Documents-IntMat-EnaDown-EnaEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.SelectDeptAdd();
    Documents.SelectDepts(selectDepts);
    Documents.SelectDeptMinus();
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(2000);
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });

  it.only("TestCase:16.Documents-IntMat-EnaDown-EnaEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.UploadCancelBtn();
  });
});
