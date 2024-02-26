import DocumentsUpload from "../../PageObjects/DocumentsPage";
import Login from "../../PageObjects/LoginPage";
const Documents = new DocumentsUpload();
const login = new Login();
import "cypress-file-upload";
describe("Documents In Departments", () => {
  var data;
  var selectDepts,
    intMatter,
    extMatter,
    addTagsType,
    addTagsName,
    editDocuments,
    dEditName;

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
    editDocuments = data.selectDocs.EditDoc1;
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
  it.only("TestCase:3.Documents-IntMat-EnaDown-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();

    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    cy.wait(2000);
    Documents.DocsNameAssert(data.documentsAssert.DocumentName3);

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
  it("TestCase: 7.Documents-IntMat-UpMore-VChanges", () => {
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
    Documents.DocsNameAssert(data.documentsAssert.DocumentName7);
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
    Documents.DocsNameAssert(data.documentsAssert.DocumentName9);
    Documents.DocsNameAssert(data.documentsAssert.DocumentName);
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
  it("TestCase:11.Document-IntMat-EnaDown-AddTags-UpMore-VChanges", () => {
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
  it("TestCase:12.Document-IntMat-EnaDown-AddTags-UpMore-VChanges-Cancel", () => {
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
  it("TestCase: 13.Documents-IntMat-Upload-EnaEnc-ViewChanges", () => {
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
  it("TestCase: 14.Documents-IntMat-Upload-EnaEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableEncryption();
    Documents.UploadCancelBtn();
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });
  it("TestCase:15.Documents-IntMat-EnaDown-EnaEnc-ViewChanges", () => {
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

  it("TestCase:16.Documents-IntMat-EnaDown-EnaEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.UploadCancelBtn();
  });
  it("TestCase:17.Document-IntMat-EnaDown-EnaEnc-AddTags-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.addTagsName.DocumentName1);
  });
  it("TestCase:18.Document-IntMat-EnaDown-EnaEnc-AddTags Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it("TestCase:19.Documents-IntMat-UploadMore-EnaEnc-ViewChanges", () => {
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
  it("TestCase:20.Documents-IntMat-EnaEnc-UploadMore-Cancel", () => {
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
  it("TestCase: 21.Documents-IntMat-UploadMore-EnaDown-EnaEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.uploadMore.DocumentName1);
  });
  it("TestCase: 22.Documents-IntMat-UploadMore-EnaDown-EnaEnc-ViewChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadCancelBtn();
  });
  it("TestCase:23.Document-IntMat-EnaDown-EnaEnc-AddTags-UpMore-VChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    cy.wait(2000);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.uploadMore.DocumentName1);
  });
  it("TestCase:24.Document-IntMat-EnaDown-EnaEnc-AddTags-UpMore-VChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.ClickBrowseBtnUploadMore();
    Documents.EnableDownload();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it("TestCase: 25.Documents-IntMat-Upload-DisEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DisableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(2000);
    Documents.ViewChanges();
    cy.wait(2000);
    Documents.DocsNameAssert(data.documentsAssert.DocumentName1);
    cy.scrollTo("top");
  });
  it("TestCase: 26.Documents-IntMat-Upload-DisEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DisableEncryption();
    Documents.UploadCancelBtn();
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });
  it("TestCase:27.Documents-IntMat-EnaDown-DisEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.SelectDeptAdd();
    Documents.SelectDepts(selectDepts);
    Documents.SelectDeptMinus();
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(2000);
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });

  it("TestCase:28.Documents-IntMat-EnaDown-DisEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.UploadCancelBtn();
  });
  it("TestCase:29.Document-IntMat-DisEnc-AddTags-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.addTagsName.DocumentName1);
  });
  it("TestCase:30.Document-IntMat-EnaDown-DisEnc-AddTags Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it("TestCase:31.Documents-IntMat-UploadMore-DisEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DisableEncryption();
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
  it("TestCase:32.Documents-IntMat-DisEnc-UploadMore-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DisableEncryption();
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
  it("TestCase:33.Documents-IntMat-UploadMore-EnaDown-DisEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.uploadMore.DocumentName1);
  });
  it("TestCase:34.Documents-IntMat-UploadMore-EnaDown-DisEnc-ViewChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadCancelBtn();
  });
  it("TestCase:35.Document-IntMat-EnaDown-DisEnc-AddTags-UpMore-VChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.UploadMoreBtn();
    // Documents.DocsMenuClick();
    // Documents.UploadTabClick();
    Documents.ClickBrowseBtnUploadMore();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    cy.wait(2000);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.uploadMore.DocumentName1);
  });
  it("TestCase:36.Document-IntMat-EnaDown-DisEnc-AddTags-UpMore-VChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.UploadMoreBtn();
    Documents.ClickBrowseBtnUploadMore();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.UploadCancelBtn();
  });
  it("TestCase: 37.Documents-IntMat-EditDocsName-Upload-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DocumentNameEdit(data.selectDocs.document2);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.ViewChanges();
    cy.wait(2000);
    Documents.DocsNameAssert(data.selectDocs.documentAssert);
    Documents.DocsNameAssert(data.selectDocs.documentAssert1);
  });
  it("TestCase: 38.Documents-IntMat-EditDocsName-Upload-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DocumentNameEdit(data.selectDocs.document2);
    Documents.UploadCancelBtn();
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });
  it("TestCase:39.Documents-IntMat-EditDocsName-EnaDown-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DocumentNameEdit(data.selectDocs.document2);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    cy.wait(2000);
    Documents.DocsNameAssert(data.selectDocs.documentAssert);
    Documents.DocsNameAssert(data.selectDocs.documentAssert1);

    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });

  it("TestCase:40.Documents-IntMat-EditDocsName-EnaDown-ViewChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DocumentNameEdit(data.selectDocs.document2);
    Documents.UploadCancelBtn();
  });
  it("TestCase:41.Document-IntMat-EnaDown-EditDocsName-AddTags-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DocumentNameEdit(data.selectDocs.document2);
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.selectDocs.documentAssert);
    Documents.DocsNameAssert(data.selectDocs.documentAssert1);
  });
  it("TestCase:42.Document-IntMat-EnaDown-EditDocsName-AddTags Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DocumentNameEdit(data.selectDocs.document2);
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it("TestCase:43.Documents-IntMat-EditDocsName-UpMore-VChanges", () => {
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
  it("TestCase: 44.Documents-IntMat-EditDocsName-UploadMore-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadCancelBtn();
  });
  it("TestCase: 45.Documents-IntMat-UploadMore-EnaDown-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.selectDocs.documentAssert1);
    Documents.DocsNameAssert(data.selectDocs.documentAssert2);
  });
  it("TestCase: 46.Documents-IntMat-UploadMore-EnaDown-ViewChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadCancelBtn();
  });
  it("TestCase:47.Document-IntMat-EnaDown-AddTags-UpMore-VChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.UploadMoreBtn();
    Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.selectDocs.documentAssert1);
    Documents.DocsNameAssert(data.selectDocs.documentAssert2);
  });
  it("TestCase:48.Document-IntMat-EnaDown-AddTags-UpMore-VChanges-Cancel", () => {
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
  it("TestCase: 49.Documents-IntMat-Upload-EnaEnc-ViewChanges", () => {
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
  it("TestCase: 50.Documents-IntMat-Upload-EnaEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableEncryption();
    Documents.UploadCancelBtn();
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });
  it("TestCase:51.Documents-IntMat-EnaDown-EnaEnc-ViewChanges", () => {
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

  it("TestCase:52.Documents-IntMat-EnaDown-EnaEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.UploadCancelBtn();
  });
  it("TestCase:53.Document-IntMat-EnaDown-EnaEnc-AddTags-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.addTagsName.DocumentName1);
  });
  it("TestCase:54.Document-IntMat-EnaDown-EnaEnc-AddTags Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it("TestCase:55.Documents-IntMat-UploadMore-EnaEnc-ViewChanges", () => {
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
  it("TestCase:56.Documents-IntMat-EnaEnc-UploadMore-Cancel", () => {
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
  it("TestCase: 57.Documents-IntMat-UploadMore-EnaDown-EnaEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.uploadMore.DocumentName1);
  });
  it("TestCase: 58.Documents-IntMat-UploadMore-EnaDown-EnaEnc-ViewChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadCancelBtn();
  });
  it("TestCase:59.Document-IntMat-EnaDown-EnaEnc-AddTags-UpMore-VChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    cy.wait(2000);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.uploadMore.DocumentName1);
  });
  it("TestCase:60.Document-IntMat-EnaDown-EnaEnc-AddTags-UpMore-VChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.ClickBrowseBtnUploadMore();
    Documents.EnableDownload();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it("TestCase: 61.Documents-IntMat-Upload-DisEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DisableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(2000);
    Documents.ViewChanges();
    cy.wait(2000);
    Documents.DocsNameAssert(data.documentsAssert.DocumentName1);
    cy.scrollTo("top");
  });
  it("TestCase: 62.Documents-IntMat-Upload-DisEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DisableEncryption();
    Documents.UploadCancelBtn();
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });
  it("TestCase:63.Documents-IntMat-EnaDown-DisEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.SelectDeptAdd();
    Documents.SelectDepts(selectDepts);
    Documents.SelectDeptMinus();
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(2000);
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });

  it("TestCase:64.Documents-IntMat-EnaDown-DisEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.UploadCancelBtn();
  });
  it("TestCase:65.Document-IntMat-DisEnc-AddTags-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.addTagsName.DocumentName1);
  });
  it("TestCase:66.Document-IntMat-EnaDown-DisEnc-AddTags Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it("TestCase:67.Documents-IntMat-UploadMore-DisEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DisableEncryption();
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
  it("TestCase:68.Documents-IntMat-DisEnc-UploadMore-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DisableEncryption();
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
  it("TestCase:69.Documents-IntMat-UploadMore-EnaDown-DisEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.uploadMore.DocumentName1);
  });
  it("TestCase:70.Documents-IntMat-UploadMore-EnaDown-DisEnc-ViewChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    Documents.ClickBrowseBtnUploadMore();
    cy.wait(2000);
    Documents.UploadCancelBtn();
  });
  it("TestCase:71.Document-IntMat-EnaDown-DisEnc-EditDocName-AddTags-UpMore-VChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.UploadMoreBtn();
    Documents.selectMatterDropdown;
    Documents.ClickBrowseBtnUploadMore();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    cy.wait(2000);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.uploadMore.DocumentName1);
  });
  it.only("TestCase:72.Document-IntMat-EnaDown-DisEnc-AddTags-UpMore-VChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.UploadMoreBtn();
    Documents.ClickBrowseBtnUploadMore();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.UploadCancelBtn();
  });
  it("Multiple Dcoument Edit's", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    // Documents.DocumentsEdits(data.selectDocs.document1);
    //Documents.NewDocsEdits(editDocuments);
    Documents.DocumentNameEdit(editDocuments);
    Documents.UploadSaveBtn();
    cy.wait(1000);
    Documents.ViewChanges();
    cy.wait(1000);
    Documents.DocsNameAssert(data.selectDocs.documentAssert1);
    Documents.DocsNameAssert(data.selectDocs.documentAssert2);
  });
});
