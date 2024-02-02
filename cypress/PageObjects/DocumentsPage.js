import "cypress-file-upload";
// const ObjectJson = require("../../fixtures/DocJson.json");
// const DocEdits = require("../fixtures/DocJson.json");
const EditData = [
  {
    name: "011EditDoc",
    des: "Description One 01",
    ed: "5/4/2024",
  },
  {
    name: "022EditDoc",
    des: "Description One 2",
    ed: "5/6/2024",
  },
];

class DocumentsUpload {
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

  DocsMenuClick() {
    cy.wait(2000);
    this.WebElements.DocsMenu().click();
  }
  UploadTabClick() {
    cy.wait(2000);
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
    cy.wait(2000);
    cy.get('[type="file"]').attachFile(["151.jpg", "PDF  014.pdf"], {
      force: true,
    });
  }
  ClickBrowseBtn1() {
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["161.jpg", "PNG  43.png"], {
      force: true,
    });
  }
  ClickBrowseBtnUploadMore() {
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["UploadMore1.rtf", "PPT UM08.ppt"], {
      force: true,
    });
  }
  EnableDownload() {
    this.WebElements.EnableDown().click();
  }
  DisableDownload() {
    this.WebElements.DisableDown().click();
  }
  AddTagsBtn() {
    cy.get('[for="btnradio4"]').click();
  }
  ATFirstOne() {
    this.WebElements.ATFirst().click({ force: true });
  }
  ATSecondOne() {
    this.WebElements.ATSecond().click();
    //   cy.scrollTo("bottom");
  }
  Tagtypes(tagType) {
    this.WebElements.TagType(tagType);
  }
  TagsInputs(tagsInput) {
    this.WebElements.TagsInput(tagsInput);
  }
  SelectAllTags() {
    this.WebElements.ATSelectAll().click();
  }
  UpSaveDisable() {
    cy.get(".btnsave", {
      timeout: 10000,
    })
      .should("be.enabled")
      .click();
  }

  EnableEncryption() {
    this.WebElements.EnableEncrypt().click();
  }
  DisableEncryption() {
    this.WebElements.DisableEncrypt().click();
  }
  AddTags() {
    this.WebElements.AddTags().click();
    cy.scrollTo("bottom");
  }
  AddTagsToDocument(tagsType, tagName) {
    this.AddTagsBtn();
    cy.xpath("//td //input[@type='checkbox']").click({ multiple: true });
    cy.wait(2000);
    cy.scrollTo("bottom");
    cy.get(":nth-child(1) > .form-group > #caseType").clear().type(tagsType);
    cy.get(":nth-child(2) > .form-group > #caseType").clear().type(tagName);
    this.WebElements.AddTagSaveBtn().click();
    // this.UploadSaveBtn();
    //this.ViewChanges();
  }
  DocumentName(renameDocs) {
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
    this.WebElements.DocsEditSave().click();
  }

  UploadSaveBtn() {
    this.WebElements.UploadSave().click({ force: true });
  }
  UploadCancelBtn() {
    this.WebElements.UploadCancel().click({ force: true });
  }
  ViewChanges() {
    this.WebElements.ViewChange().click({ force: true });
    cy.scrollTo(0, 300);
  }
  UploadMoreBtn() {
    this.WebElements.UploadMore().click({ force: true });
  }

  DocsNameAssert(docsAssert) {
    this.WebElements.AssertDocs().should("contain", docsAssert);
  }
  DescChangesAssert(descAssert) {
    this.WebElements.AssertDesc().should("contain", descAssert);
  }

  NewDocsEdits() {
    EditData.forEach((EData) => {
      cy.get("i.fa.fa-edit").each(($EditBtn, $index) => {
        cy.wrap($EditBtn).click({ force: true });
        {
          cy.wait(1000);
          cy.scrollTo("bottom");
          cy.get("#documentName").clear({ force: true });
          cy.wait(1000);
          cy.get("#documentName").type(EData.name);
          cy.wait(1000);
          cy.get(":nth-child(2) > .form-group > .form-control").clear({
            force: true,
          });
          cy.wait(1000);
          cy.get(":nth-child(2) > .form-group > .form-control").type(EData.des);
          cy.wait(1000);
          cy.get(".mat-datepicker-input").clear({ force: true });
          cy.wait(1000);
          cy.get(".mat-datepicker-input").type(EData.ed);
          cy.wait(2000);

          cy.get(".btnsave").click({ force: true });
          cy.wait(2000);
        }
        this.WebElements.UploadSave().click({ force: true });

        cy.wait(2000);
      });
    });
    //  this.WebElements.UploadSave().click({ force: true });
  }

  // AddTagsEdits(tagsType, tagName) {
  //   this.AddTags();
  //   cy.xpath("//td //input[@type='checkbox']").each(($Chkbox, $index) => {
  //     cy.wait(3000);
  //     cy.wrap($Chkbox).click({ force: true });
  //     cy.get(":nth-child(1) > .form-group > #caseType").type(tagsType);
  //     cy.get(":nth-child(2) > .form-group > #caseType").type(tagName);
  //     this.WebElements.AddTagSaveBtn().click();
  //   });
  // }

  // }
  // DocumentsEdits(DocName, DocDesc, DocExpiry) {
  //   cy.get(".fa.fa-edit").each(($element, index, $list) => {
  //     cy.wrap($element).click();
  //     cy.wait(2000);
  //     cy.scrollTo("bottom");
  //     cy.get("#documentName").clear();
  //     cy.get("#documentName").type(DocName);
  //     cy.get(":nth-child(2) > .form-group > .form-control").clear();
  //     cy.get(":nth-child(2) > .form-group > .form-control").type(DocDesc);
  //     // cy.get("#mat-input-0").clear();
  //     cy.get(".mat-datepicker-input").type(DocExpiry);
  //     cy.wait(2000);
  //     cy.get(".btnsave").click();
  //   });
  // }

  // DocumentsEdits(intArray, des) {
  //   //   function editAllField(intArray, des) {
  //   let jj = 0;
  //   for (jj = 0; jj < intArray.length; jj++) {
  //     let eb = intArray[jj];

  //     DocsEdit = [eb].click();

  //     cy.scrollTo("bottom");
  //     cy.wait(2000);
  //     // editAllFields(des[eb][0], des[eb][1], des[eb][2]);
  //     this.DocumentEditAllFields(des[eb][0], des[eb][1], des[eb][2]);
  //   }
  // }
}

export default DocumentsUpload;
