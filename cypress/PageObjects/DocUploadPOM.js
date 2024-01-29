import "cypress-file-upload";

class DocsUploadDept {
  WebElements = {
    DocsMenu: () =>
      cy.get(":nth-child(3) > .left-menu-icon > .iconlink > .mattersicon"),
    UploadTab: () => cy.get(".upload"),
    SelectDept: () => cy.get(".multicheck > .fa"),
    DeptMinus: () => cy.get(".fa.fa-minus"),
    SelectIntMatRadioBtn: () => cy.get("#mat-radio-2-input"),
    SelectExtMatRadioBtn: () => cy.get("#mat-radio-3-input"),
    EnableDown: () => cy.get('[for="btnradio1"]'),
    DisableDown: () => cy.get('[for="btnradio2"]'),
    EnableEncrypt: () => cy.get('[for="btnradio3"]'),
    DisableEncrypt: () => cy.get('[for="btnradio5"]'),
    AddTag: () => cy.get('[for="btnradio4"]'),
    DocsEdit: () => cy.get(".fa.fa-edit"),
    DocsEditSave: () => cy.get(".btnsave"),
    UploadSave: () => cy.get(".btnsave"),
    ViewChange: () => cy.get(".alertbtn"),
    AssertDocs: () => cy.xpath("//tr//td[1]"),
    AssertDesc: () => cy.xpath("//tbody/tr[1]/td[2]"),
  };
  DocsMenuClick() {
    this.WebElements.DocsMenu().click();
  }
  UploadTabClick() {
    cy.wait(1000);
    this.WebElements.UploadTab().click();
  }
  SelectDeptAdd() {
    this.WebElements.SelectDept().click();
  }

  SelectDepts(deptSelect) {
    for (let i = 0; i < deptSelect.length; i++) {
      cy.xpath(
        "//div//label[text()='" + deptSelect[i] + "']//following::input[1]"
      ).click();
    }
  }
  SelectDeptMinus() {
    cy.scrollTo("top");
    this.WebElements.DeptMinus().click();
  }
  SelectInternalMatterRadioBtn() {
    this.WebElements.SelectIntMatRadioBtn().click();
  }
  SelectExternalMatterRadioBtn() {
    this.WebElements.SelectExtMatRadioBtn().click();
  }
  SelectMatterDropdown(intMatterSelect) {
    cy.get("select.textbox").select(intMatterSelect);
  }
  selectMatterDropdown(extMatterSelect) {
    cy.get("select.textbox").select(extMatterSelect);
    cy.wait(1000);
  }
  ClickBrowseBtn() {
    cy.get('[type="file"]').attachFile(
      ["JPG DOCS.jpg", "DOCX ENC L2DG.docx"],

      { force: true }
    );
  }
  // ClickBrowseBtn() {
  //   cy.get('[type="file"]').selectFile(
  //     {
  //       contents: "cypress/fixtures/Images/JPG DOCS.jpg",
  //       fileName: "JPG DOCS.jpg",
  //       mimeType: "text/jpg",
  //       lastModified: Date.now(),
  //     },
  //     { force: true }
  //   );
  // }
  EnableDownload() {
    this.WebElements.EnableDown.click();
  }
  DisableDownload() {
    this.WebElements.DisableDown.click();
  }
  EnableEncryption() {
    this.WebElements.EnableEncrypt.click();
  }
  DisableEncryption() {
    this.WebElements.DisableEncrypt.click();
  }
  AddTags() {
    this.WebElements.AddTag().click();
  }
  DocumentName(renameDocs) {
    this.WebElements.DocsEdit1().click();
    cy.scrollTo("bottom");
    cy.get("#documentName").clear();
    cy.get("#documentName").type(renameDocs);
  }
  DescriptionChange(editDesc) {
    cy.get(":nth-child(2) > .form-group > .form-control").clear();
    cy.get(":nth-child(2) > .form-group > .form-control").type(editDesc);
  }
  DatepickerSelection(expDate) {
    cy.get("#mat-input-0").clear();
    cy.get("#mat-input-0").type(expDate);
  }

  DocEditSaveBtn() {
    this.WebElements.DocsEditSave().click({ multiple: true });
  }

  UploadBtn() {
    this.WebElements.UploadSave().click();
  }
  ViewChanges() {
    this.WebElements.ViewChange().click();
    cy.scrollTo(0, 300);
  }

  DocsNameEditsAssert(docsAssert) {
    this.WebElements.AssertDocs().should("contain", docsAssert);
  }
  DescChangesAssert(descAssert) {
    this.WebElements.AssertDesc().should("contain", descAssert);
  }
  DocumentsEdits(DocName, DocDesc, DocExpiry) {
    cy.get(".fa.fa-edit").each(($element, index, $list) => {
      cy.wrap($element).click();
      cy.wait(1000);
      cy.scrollTo("bottom");
      cy.get("#documentName").clear();
      cy.get("#documentName").type(DocName);
      cy.get(":nth-child(2) > .form-group > .form-control").clear();
      cy.get(":nth-child(2) > .form-group > .form-control").type(DocDesc);
      // cy.get("#mat-input-0").clear();
      cy.get(".mat-datepicker-input").type(DocExpiry);
      cy.wait(2000);
      cy.get(".btnsave").click();
    });
  }
}

export default DocsUploadDept;
