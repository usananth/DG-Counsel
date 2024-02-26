import "cypress-file-upload";
import Documents from "../../PageObjects/DocumentsPage";
import Login from "../../PageObjects/LoginPage";
describe("Documents In Departments", () => {
  var data;
  var selectDepts, intMatter, extMatter, addTagsType, addTagsName;

  before(() => {
    Login.visit();
    cy.fixture("Documents").then((value) => {
      data = value;
      Login.userName(data.loginData.inputmail);
      Login.userPassword(data.loginData.inputpassword);
      Login.submitBtn();
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
  // it("TestCase: 1.DocNameEdit-IntMat-Upload-ViewChanges", () => {
  //   Documents.SelectMatterDropdown(intMatter);
  //   Documents.ClickBrowseBtn();
  //   Documents.DocumentNameEdit(data.editDocs.EditDoc1);
  //   Documents.UploadSaveBtn();
  //   Documents.ViewChanges();
  //   cy.wait(2000);
  //   Documents.DocsNameAssert(data.editDocs.documentAssert1);
  //   // Documents.DocsNameAssert(data.editDocs.documentAssert2);
  // });
  // it("TestCase: 2.DocNameEdit-IntMat-Upload-Cancel", () => {
  //   Documents.SelectMatterDropdown(intMatter);
  //   Documents.ClickBrowseBtn();
  //   Documents.DocumentNameEdit(data.editDocs.EditDoc2);
  //   Documents.UploadCancelBtn();
  //   // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  // });
  // it("TestCase:3.DocNameEdit-IntMat-EnaDown-ViewChanges", () => {
  //   cy.wait(2000);
  //   Documents.SelectMatterDropdown(intMatter);
  //   Documents.SelectDeptAdd();
  //   Documents.SelectDepts(selectDepts);
  //   Documents.SelectDeptMinus();
  //   Documents.ClickBrowseBtn();
  //   Documents.EnableDownload();
  //   cy.wait(2000);
  //   Documents.DocumentNameEdit(data.editDocs.EditDoc3);
  //   Documents.UploadSaveBtn();
  //   Documents.ViewChanges();
  //   cy.wait(2000);
  //   Documents.DocsNameAssert(data.editDocs.documentAssert3);
  //   Documents.DocsNameAssert(data.editDocs.documentAssert1);

  //   // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  // });

  // it("TestCase:4.DocNameEdit-IntMat-EnaDown-ViewChanges-Cancel", () => {
  //   Documents.SelectMatterDropdown(intMatter);
  //   Documents.ClickBrowseBtn();
  //   Documents.EnableDownload();
  //   Documents.DocumentNameEdit(data.editDocs.EditDoc4);
  //   Documents.UploadCancelBtn();
  // });
  // it("TestCase:5.DocNameEdit-IntMat-EnaDown-AddTags-ViewChanges", () => {
  //   Documents.SelectMatterDropdown(intMatter);
  //   Documents.SelectDeptAdd();
  //   Documents.SelectDepts(selectDepts);
  //   Documents.SelectDeptMinus();
  //   Documents.ClickBrowseBtn1();
  //   Documents.EnableDownload();
  //   Documents.DocumentNameEdit(data.editDocs.EditDoc5);
  //   Documents.AddTagsToDocument(addTagsType, addTagsName);
  //   Documents.UploadSaveBtn();
  //   Documents.ViewChanges();
  //   Documents.DocsNameAssert(data.editDocs.documentAssert5);
  //   Documents.DocsNameAssert(data.editDocs.documentAssert3);
  // });
  // it("TestCase:6.DocNameEdit-IntMat-EnaDown-AddTags Cancel", () => {
  //   Documents.SelectMatterDropdown(intMatter);
  //   Documents.ClickBrowseBtn1();
  //   Documents.EnableDownload();
  //   Documents.DocumentNameEdit(data.editDocs.EditDoc6);
  //   Documents.AddTagsToDocument(addTagsType, addTagsName);
  //   Documents.UploadCancelBtn();
  // });
  // it("TestCase:7.DocNameEdit-IntMat-UpMore-VChanges", () => {
  //   Documents.SelectMatterDropdown(intMatter);
  //   Documents.SelectDeptAdd();
  //   Documents.SelectDepts(selectDepts);
  //   Documents.SelectDeptMinus();
  //   Documents.ClickBrowseBtn();
  //   Documents.DocumentNameEdit(data.editDocs.EditDoc7);
  //   Documents.UploadSaveBtn();
  //   cy.wait(3000);
  //   Documents.UploadMoreBtn();
  //   // Documents.DocsMenuClick();
  //   // Documents.UploadTabClick();
  //   // Documents.SelectInternalMatterRadioBtn();
  //   Documents.ClickBrowseBtnUploadMore();
  //   Documents.DocumentNameEdit(data.editDocs.EditDoc6);
  //   cy.wait(2000);
  //   Documents.UploadSaveBtn();
  //   Documents.ViewChanges();
  //   Documents.DocsNameAssert(data.editDocs.documentAssert7);
  //   Documents.DocsNameAssert(data.editDocs.documentAssert6);
  // });
  // it("TestCase: 8.DocNameEdit-IntMat-UploadMore-Cancel", () => {
  //   Documents.SelectMatterDropdown(intMatter);
  //   Documents.ClickBrowseBtn();
  //   Documents.DocumentNameEdit(data.editDocs.EditDoc8);
  //   Documents.UploadSaveBtn();
  //   cy.wait(5000);
  //   Documents.UploadMoreBtn();
  //   // Documents.SelectInternalMatterRadioBtn();
  //   Documents.ClickBrowseBtnUploadMore();
  //   Documents.DocumentNameEdit(data.editDocs.EditDoc8);
  //   cy.wait(2000);
  //   Documents.UploadCancelBtn();
  // });
  // it("TestCase: 9.DocNameEdit-IntMat-UploadMore-EnaDown-ViewChanges", () => {
  //   Documents.SelectMatterDropdown(intMatter);
  //   Documents.SelectDeptAdd();
  //   Documents.SelectDepts(selectDepts);
  //   Documents.SelectDeptMinus();
  //   Documents.ClickBrowseBtn();
  //   Documents.DocumentNameEdit(data.editDocs.EditDoc9);
  //   Documents.EnableDownload();
  //   Documents.UploadSaveBtn();
  //   cy.wait(5000);
  //   Documents.UploadMoreBtn();
  //   // Documents.SelectInternalMatterRadioBtn();
  //   Documents.ClickBrowseBtnUploadMore();
  //   Documents.DocumentNameEdit(data.editDocs.EditDoc10);
  //   cy.wait(2000);
  //   Documents.UploadSaveBtn();
  //   Documents.ViewChanges();
  //   Documents.DocsNameAssert(data.editDocs.documentAssert9);
  //   Documents.DocsNameAssert(data.editDocs.documentAssert10);
  // });
  it("TestCase: 10.DocNameEdit-IntMat-UploadMore-EnaDown-ViewChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DocumentNameEdit(data.editDocs.EditDoc11);
    Documents.UploadSaveBtn();
    cy.wait(5000);
    Documents.UploadMoreBtn();
    Documents.DocsMenuClick();
    Documents.UploadTabClick();
    //Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    Documents.DocumentNameEdit(data.editDocs.EditDoc11);
    cy.wait(2000);
    Documents.UploadCancelBtn();
  });
  it("TestCase:11.DocNameEdit-IntMat-EnaDown-AddTags-UpMore-VChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.SelectDeptAdd();
    Documents.SelectDepts(selectDepts);
    Documents.SelectDeptMinus();
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DocumentNameEdit(data.editDocs.EditDoc12);
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.UploadMoreBtn();
    // Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    Documents.DocumentNameEdit(data.editDocs.EditDoc13);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.editDocs.documentAssert12);
    Documents.DocsNameAssert(data.editDocs.documentAssert13);
  });
  it("TestCase:12.DocNameEdit-IntMat-EnaDown-AddTags-UpMore-VChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    // Documents.SelectDeptAdd();
    // Documents.SelectDepts(selectDepts);
    // Documents.SelectDeptMinus();
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DocumentNameEdit(data.editDocs.EditDoc13);
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    cy.wait(3000);
    cy.wait(3000);
    Documents.UploadMoreBtn();
    // Documents.SelectInternalMatterRadioBtn();
    Documents.ClickBrowseBtnUploadMore();
    Documents.EnableDownload();
    //Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });

  it("TestCase: 13.DocNameEdit-IntMat-Upload-EnaEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.SelectDeptAdd();
    Documents.SelectDepts(selectDepts);
    Documents.SelectDeptMinus();
    Documents.ClickBrowseBtn();
    Documents.EnableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(3000);
    Documents.ViewChanges();
    cy.wait(2000);
    Documents.DocsNameAssert(data.documentsAssert.DocumentName1);
    cy.scrollTo("top");
  });
  it("TestCase: 14.DocNameEdit-IntMat-Upload-EnaEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableEncryption();
    Documents.UploadCancelBtn();
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });
  it("TestCase:15.DocNameEdit-IntMat-EnaDown-EnaEnc-ViewChanges", () => {
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

  it("TestCase:16.DocNameEdit-IntMat-EnaDown-EnaEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.UploadCancelBtn();
  });
  it("TestCase:17.DocNameEdit-IntMat-EnaDown-EnaEnc-AddTags-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.SelectDeptAdd();
    Documents.SelectDepts(selectDepts);
    Documents.SelectDeptMinus();
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.addTagsName.DocumentName1);
  });
  it("TestCase:18.DocNameEdit-IntMat-EnaDown-EnaEnc-AddTags Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it("TestCase:19.DocNameEdit-IntMat-UploadMore-EnaEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.SelectDeptAdd();
    Documents.SelectDepts(selectDepts);
    Documents.SelectDeptMinus();
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
  it("TestCase:20.DocNameEdit-IntMat-EnaEnc-UploadMore-Cancel", () => {
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
  it("TestCase: 21.DocNameEdit-IntMat-UploadMore-EnaDown-EnaEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.SelectDeptAdd();
    Documents.SelectDepts(selectDepts);
    Documents.SelectDeptMinus();
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
  it("TestCase: 22.DocNameEdit-IntMat-UploadMore-EnaDown-EnaEnc-ViewChanges-Cancel", () => {
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
  it("TestCase:23.DocNameEdit-IntMat-EnaDown-EnaEnc-AddTags-UpMore-VChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.SelectDeptAdd();
    Documents.SelectDepts(selectDepts);
    Documents.SelectDeptMinus();
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
  it("TestCase:24.DocNameEdit-IntMat-EnaDown-EnaEnc-AddTags-UpMore-VChanges-Cancel", () => {
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
  it("TestCase: 25.DocNameEdit-IntMat-Upload-DisEnc-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.SelectDeptAdd();
    Documents.SelectDepts(selectDepts);
    Documents.SelectDeptMinus();
    Documents.ClickBrowseBtn();
    Documents.DisableEncryption();
    Documents.UploadSaveBtn();
    cy.wait(2000);
    Documents.ViewChanges();
    cy.wait(2000);
    Documents.DocsNameAssert(data.documentsAssert.DocumentName1);
    cy.scrollTo("top");
  });
  it("TestCase: 26.DocNameEdit-IntMat-Upload-DisEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DisableEncryption();
    Documents.UploadCancelBtn();
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });

  it("TestCase:27.DocNameEdit-IntMat-EnaDown-DisEnc-ViewChanges", () => {
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

  it("TestCase:28.DocNameEdit-IntMat-EnaDown-DisEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.UploadCancelBtn();
  });
  it("TestCase:29.DocNameEdit-IntMat-DisEnc-AddTags-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.addTagsName.DocumentName1);
  });
  it("TestCase:30.DocNameEdit-IntMat-EnaDown-DisEnc-AddTags Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it("TestCase:31.DocNameEdit-IntMat-UploadMore-DisEnc-ViewChanges", () => {
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
  it("TestCase:32.DocNameEdit-IntMat-DisEnc-UploadMore-Cancel", () => {
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
  it("TestCase:33.DocNameEdit-IntMat-UploadMore-EnaDown-DisEnc-ViewChanges", () => {
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
  it("TestCase:34.DocNameEdit-IntMat-UploadMore-EnaDown-DisEnc-ViewChanges-Cancel", () => {
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
  it("TestCase:35.DocNameEdit-IntMat-EnaDown-DisEnc-AddTags-UpMore-VChanges", () => {
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
  it("TestCase:36.DocNameEdit-IntMat-EnaDown-DisEnc-AddTags-UpMore-VChanges-Cancel", () => {
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
  it("TestCase: 37.DocNameEdit-IntMat-EditDocsName-Upload-ViewChanges", () => {
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
  it("TestCase: 38.DocNameEdit-IntMat-EditDocsName-Upload-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DocumentNameEdit(data.selectDocs.document2);
    Documents.UploadCancelBtn();
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });
  it("TestCase:39.DocNameEdit-IntMat-EditDocsName-EnaDown-ViewChanges", () => {
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

  it("TestCase:40.DocNameEdit-IntMat-EditDocsName-EnaDown-ViewChanges-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DocumentNameEdit(data.selectDocs.document2);
    Documents.UploadCancelBtn();
  });
  it("TestCase:41.DocNameEdit-IntMat-EnaDown-EditDocsName-AddTags-ViewChanges", () => {
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
  it("TestCase:42.DocNameEdit-IntMat-EnaDown-EditDocsName-AddTags Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DocumentNameEdit(data.selectDocs.document2);
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it("TestCase:43.DocNameEdit-IntMat-EditDocsName-UpMore-VChanges", () => {
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
  it("TestCase: 44.DocNameEdit-IntMat-EditDocsName-UploadMore-Cancel", () => {
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
  it("TestCase: 45.DocNameEdit-IntMat-UploadMore-EnaDown-ViewChanges", () => {
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
  it("TestCase: 46.DocNameEdit-IntMat-UploadMore-EnaDown-ViewChanges-Cancel", () => {
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
  it("TestCase:47.DocNameEdit-IntMat-EnaDown-AddTags-UpMore-VChanges", () => {
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
  it("TestCase:48.DocNameEdit-IntMat-EnaDown-AddTags-UpMore-VChanges-Cancel", () => {
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
  it("TestCase: 49.DocNameEdit-IntMat-Upload-EnaEnc-ViewChanges", () => {
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
  it("TestCase: 50.DocNameEdit-IntMat-Upload-EnaEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableEncryption();
    Documents.UploadCancelBtn();
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });
  it("TestCase:51.DocNameEdit-IntMat-EnaDown-EnaEnc-ViewChanges", () => {
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

  it("TestCase:52.DocNameEdit-IntMat-EnaDown-EnaEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.UploadCancelBtn();
  });
  it("TestCase:53.DocNameEdit-IntMat-EnaDown-EnaEnc-AddTags-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.addTagsName.DocumentName1);
  });
  it("TestCase:54.DocNameEdit-IntMat-EnaDown-EnaEnc-AddTags Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.EnableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it("TestCase:55.DocNameEdit-IntMat-UploadMore-EnaEnc-ViewChanges", () => {
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
  it("TestCase:56.DocNameEdit-IntMat-EnaEnc-UploadMore-Cancel", () => {
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
  it("TestCase: 57.DocNameEdit-IntMat-UploadMore-EnaDown-EnaEnc-ViewChanges", () => {
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
  it("TestCase: 58.DocNameEdit-IntMat-UploadMore-EnaDown-EnaEnc-ViewChanges-Cancel", () => {
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
  it("TestCase:59.DocNameEdit-IntMat-EnaDown-EnaEnc-AddTags-UpMore-VChanges", () => {
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
  it("TestCase:60.DocNameEdit-IntMat-EnaDown-EnaEnc-AddTags-UpMore-VChanges-Cancel", () => {
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
  it("TestCase: 61.DocNameEdit-IntMat-Upload-DisEnc-ViewChanges", () => {
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
  it("TestCase: 62.DocNameEdit-IntMat-Upload-DisEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.DisableEncryption();
    Documents.UploadCancelBtn();
    // Documents.DocsNameAssert(data.documentsAssert.DocumentName2);
  });
  it("TestCase:63.DocNameEdit-IntMat-EnaDown-DisEnc-ViewChanges", () => {
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

  it("TestCase:64.DocNameEdit-IntMat-EnaDown-DisEnc-Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.UploadCancelBtn();
  });
  it("TestCase:65.DocNameEdit-IntMat-DisEnc-AddTags-ViewChanges", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadSaveBtn();
    Documents.ViewChanges();
    Documents.DocsNameAssert(data.addTagsName.DocumentName1);
  });
  it("TestCase:66.DocNameEdit-IntMat-EnaDown-DisEnc-AddTags Cancel", () => {
    Documents.SelectMatterDropdown(intMatter);
    Documents.ClickBrowseBtn1();
    Documents.EnableDownload();
    Documents.DisableEncryption();
    Documents.AddTagsToDocument(addTagsType, addTagsName);
    Documents.UploadCancelBtn();
  });
  it("TestCase:67.DocNameEdit-IntMat-UploadMore-DisEnc-ViewChanges", () => {
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
  it("TestCase:68.DocNameEdit-IntMat-DisEnc-UploadMore-Cancel", () => {
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
  it("TestCase:69.DocNameEdit-IntMat-UploadMore-EnaDown-DisEnc-ViewChanges", () => {
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
  it("TestCase:70.DocNameEdit-IntMat-UploadMore-EnaDown-DisEnc-ViewChanges-Cancel", () => {
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
  it("TestCase:71.DocNameEdit-IntMat-EnaDown-DisEnc-EditDocName-AddTags-UpMore-VChanges", () => {
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
  it("TestCase:72.DocNameEdit-IntMat-EnaDown-DisEnc-AddTags-UpMore-VChanges-Cancel", () => {
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
