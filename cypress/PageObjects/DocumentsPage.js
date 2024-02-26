import "cypress-file-upload";
const DocEdits = require("../fixtures/DocJson.json");
class DocumentsPage {
  WebElements = {
    DocsMenu: () =>
      cy.get(":nth-child(3) > .left-menu-icon > .iconlink > .mattersicon"),
    UploadTab: () => cy.get(".upload"),
    SelectDept: () => cy.get(".multicheck > .fa"),
    DeptMinus: () => cy.get(".fa.fa-minus"),
    SelectIntMatRadioBtn: () => cy.get("#mat-radio-2"),
    SelectExtMatRadioBtn: () => cy.get("#mat-radio-3"),
    EnableDown: () => cy.get('[for="btnradio1"]'),
    DisableDown: () => cy.get('[for="btnradio2"]'),
    EnableEncrypt: () => cy.get('[for="btnradio3"]'),
    DisableEncrypt: () => cy.get('[for="btnradio5"]'),
    AddTags: () => cy.get('[for="btnradio4"]'),
    ATSelectAll: () => cy.get(".inputEl"),
    ATagCheckbox: () => cy.xpath("//td //input[@type='checkbox']"),
    TagType: () => cy.get(":nth-child(1) > .form-group > #caseType"),
    TagsInput: () => cy.get(":nth-child(2) > .form-group > #caseType"),
    ATFirst: () =>
      cy.get(
        ":nth-child(1) > .documents-list > .row > .col-2 > .icon-list > table > tbody > tr > .ng-star-inserted > input"
      ),
    ATSecond: () =>
      cy.get(
        ":nth-child(2) > .documents-list > .row > .col-2 > .icon-list > table > tbody > tr > .ng-star-inserted > input"
      ),
    AddBtnAddTags: () => cy.get(".tags-width > .btn"),
    AddTagSaveBtn: () => cy.get(".btnsave"),
    AddTagCancelBtn: () => cy.get(".btncancel"),
    AddTagXBtn: () => cy.get(".col-1 > div > .fa"),
    DocsEdit: () => cy.get(".fa.fa-edit"),
    DocsEditSave: () => cy.get(".btnsave"),
    UploadSave: () => cy.get(".btnsave"),
    UploadCancel: () => cy.get(".btncancel"),
    ViewChange: () => cy.get(".alertbtn"),
    UploadMore: () => cy.get(".upload-btn"),
    AssertDocs: () => cy.xpath("//tr//td[1]"),
    AssertDesc: () => cy.xpath("//tbody/tr[1]/td[2]"),
  };
  // Documents Menu
  DocsMenuClick() {
    cy.wait(2000);
    this.WebElements.DocsMenu().click({ force: true });
  }
  //Upload Tab
  UploadTabClick() {
    cy.wait(2000);
    this.WebElements.UploadTab().click({ force: true });
  }
  //Select Dept Plus
  SelectDeptAdd() {
    this.WebElements.SelectDept().click({ force: true });
  }
  // Select the Department from list
  SelectDepts(deptSelect) {
    for (let i = 0; i < deptSelect.length; i++) {
      cy.xpath(
        "//div//label[text()='" + deptSelect[i] + "']//following::input[1]"
      ).click({ force: true });
    }
  }
  //Select Department Minus
  SelectDeptMinus() {
    cy.scrollTo("top");
    this.WebElements.DeptMinus().click({ force: true });
  }
  // Select the Internal Matter Radio Button
  SelectInternalMatterRadioBtn() {
    this.WebElements.SelectIntMatRadioBtn().click();
  }
  // Select the External Matter Radio Button
  SelectExternalMatterRadioBtn() {
    this.WebElements.SelectExtMatRadioBtn().click();
  }
  //Select the Internal Matter
  SelectMatterDropdown(intMatterSelect) {
    cy.get("select.textbox").select(intMatterSelect);
  }
  //Select the External Matter
  selectMatterDropdown(extMatterSelect) {
    cy.get("select.textbox").select(extMatterSelect);
  }
  //Select Documents Browse Button
  ClickBrowseBtn() {
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["Document1.jpg", "Object2.jpg"], {
      force: true,
    });
  }
  //Select Documents Browse Button
  ClickBrowseBtn007() {
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["45TC11.jpg", "TC46.ppt"], {
      force: true,
    });
  }
  //Select Documents Browse Button
  ClickBrowseBtn1() {
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["48A.jpg", "XPath11.pdf"], {
      force: true,
    });
  }
  //Select Documents Browse Button for Upload More
  ClickBrowseBtnUploadMore() {
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["47A1.docx", "45TCUM.jpg"], {
      force: true,
    });
  }
  // Enable Download Radio Button
  EnableDownload() {
    this.WebElements.EnableDown().click({ force: true });
  }
  // Disable Download Radio Button
  DisableDownload() {
    this.WebElements.DisableDown().click();
  }
  // AddTag Radio button
  AddTagsBtn() {
    cy.get('[for="btnradio4"]').click();
  }
  //Add Tag tag type input
  Tagtypes(tagType) {
    this.WebElements.TagType(tagType);
  }
  //Add Tag Input type
  TagsInputs(tagsInput) {
    this.WebElements.TagsInput(tagsInput);
  }
  //Add Tags for All Documents
  SelectAllTags() {
    this.WebElements.ATSelectAll().click();
  }
  // Enable Ecryption Radio Button
  EnableEncryption() {
    this.WebElements.EnableEncrypt().click();
  }
  // Disable Ecryption Radio Button
  DisableEncryption() {
    this.WebElements.DisableEncrypt().click();
  }
  //Add Tags Radio Button
  AddTags() {
    this.WebElements.AddTags().click();
    cy.scrollTo("bottom");
  }
  //Add Tags to Each Documents
  AddTagsToDocument(tagsType, tagName) {
    this.AddTagsBtn();
    cy.get(".inputEl").click();
    cy.wait(2000);
    cy.scrollTo("bottom");
    cy.wait(2000);
    cy.get(":nth-child(1) > .form-group > #caseType").clear().type(tagsType);
    cy.get(":nth-child(2) > .form-group > #caseType").clear().type(tagName);
    this.WebElements.AddTagSaveBtn().click();
  }
  //Document Edit Save Button
  DocEditSaveBtn() {
    this.WebElements.DocsEditSave().click();
  }
  //Upload Save Button
  UploadSaveBtn() {
    this.WebElements.UploadSave().click({ force: true });
  }
  //Upload Cancel Button
  UploadCancelBtn() {
    this.WebElements.UploadCancel().click({ force: true });
  }
  //View Changes Button
  ViewChanges() {
    this.WebElements.ViewChange().click({ force: true });
    cy.scrollTo(0, 300, { ensureScrollable: false });
  }
  //Upload More Button
  UploadMoreBtn() {
    this.WebElements.UploadMore().click({ force: true });
  }
  //Document Name Assert
  DocsNameAssert(docsAssert) {
    this.WebElements.AssertDocs().should("contain", docsAssert);
  }
  //Description Change Assert
  DescChangesAssert(descAssert) {
    this.WebElements.AssertDesc().should("contain", descAssert);
  }

  DocumentNameEdit(DocName) {
    cy.get(".fa.fa-edit").each(($element, $index, $list) => {
      cy.wrap($element).click();
      cy.wait(1000);
      cy.scrollTo("bottom");
      cy.get("#documentName").clear().type(DocName);
      cy.wait(1000);
      this.DocEditSaveBtn();
    });
    //  this.WebElements.UploadSave().click();
  }
  DocumentDescriptionEdit(DescEdit) {
    cy.get(".fa.fa-edit").each(($element, $index, $list) => {
      cy.wrap($element).click();
      cy.wait(1000);
      cy.scrollTo("bottom");
      cy.get(":nth-child(2) > .form-group > .form-control")
        .clear({
          force: true,
        })
        .clear()
        .type(DescEdit);
      cy.wait(1000);
      this.DocEditSaveBtn();
    });
    //  this.WebElements.UploadSave().click();
  }
  DocumentExpDateEdit(ExpDate) {
    cy.get(".fa.fa-edit").each(($element, $index, $list) => {
      cy.wrap($element).click();
      cy.wait(1000);
      cy.scrollTo("bottom");
      cy.get(".mat-datepicker-input").clear({ force: true }).type(ExpDate);
      cy.wait(1000);
      this.DocEditSaveBtn();
    });
    //  this.WebElements.UploadSave().click();
  }
  DocsNameandDescriptionEdit(DocName, DocDesc) {
    cy.get(".fa.fa-edit").each(($element, $index, $list) => {
      cy.wrap($element).click();
      cy.wait(1000);
      cy.scrollTo("bottom");
      cy.get("#documentName").clear().type(DocName);
      cy.wait(1000);
      cy.get(":nth-child(2) > .form-group > .form-control")
        .clear({
          force: true,
        })
        .clear()
        .type(DocDesc);
      this.DocEditSaveBtn();
    });
  }
  DocsNameandExpDate(DocName, ExpDate) {
    cy.get(".fa.fa-edit").each(($element, $index, $list) => {
      cy.wrap($element).click();
      cy.wait(1000);
      cy.scrollTo("bottom");
      cy.get("#documentName").clear().type(DocName);
      cy.wait(1000);
      cy.get(".mat-datepicker-input").clear({ force: true }).type(ExpDate);
      cy.wait(1000);
      this.DocEditSaveBtn();
    });
  }

  DocsNameandDescripitonExpdateEdit(DocName, DocDesc, ExpDate) {
    cy.get(".fa.fa-edit").each(($element, $index, $list) => {
      cy.wrap($element).click();
      cy.wait(1000);
      cy.scrollTo("bottom");
      cy.get("#documentName").clear().type(DocName);
      cy.wait(1000);
      cy.get(":nth-child(2) > .form-group > .form-control")
        .clear({
          force: true,
        })
        .clear()
        .type(DocDesc);
      cy.wait(1000);
      cy.get(".mat-datepicker-input").clear({ force: true }).type(ExpDate);
      this.DocEditSaveBtn();
    });
  }
}
module.exports = new DocumentsPage();
