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
    UploadMore: () => cy.get(".btn.btn-default.upload-btn"),
    AssertDocs: () => cy.xpath("//tr//td[1]"),
    AssertDesc: () => cy.xpath("//tbody/tr[1]/td[2]"),
  };

  DocsMenuClick() {
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
    cy.get('[type="file"]').attachFile(
      ["LAW ENC L2DG.jpeg", "PDF  ENC.pdf"],

      { force: true }
    );
  }
  EnableDownload() {
    this.WebElements.EnableDown().click();
  }
  DisableDownload() {
    this.WebElements.DisableDown().click();
  }
  EnableEncryption() {
    this.WebElements.EnableEncrypt().click();
  }
  DisableEncryption() {
    this.WebElements.DisableEncrypt().click();
  }
  AddTags() {
    this.WebElements.AddTag().click();
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
    cy.wait(4000);
    this.WebElements.UploadSave().click();
  }
  ViewChanges() {
    this.WebElements.ViewChange().click();
    cy.scrollTo(0, 300);
  }
  DocsEditAllField(DocName, DocDes, ExpDate) {
    this.DocumentName(DocName);
    this.DescriptionChange(DocDes);
    this.DatepickerSelection(ExpDate);
    this.DocEditSaveBtn();
  }
  DocumentEditAllFields(intArray, des) {
    // var editBtn = cy.get(".fa.fa-edit");
    // for (let jj = 0; jj < intArray.length; jj++) {
    //   cy.wait(2000);
    //   let eb = intArray[jj];
    //   editBtn = eb;
    //   editBtn.click;
    const EditIcon = cy.get(".fa.fa-edit");
    for (let i = 0; i <= 13; i++) {
      let Editbtn = intArray[i];
      EditIcon.get(Editbtn).click();

      // editBtn.get(eb).click();
      this.DocsEditAllField(des[eb][0], des[eb][1], des[eb][2]);
    }
  }

  DocsNameEditsAssert(docsAssert) {
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

  DocumentsEdits(intArray, des) {
    for (let i = 0; i <= 13; i++) {
      let Editbtn = intArray[i];
      EditIcon.get(Editbtn).click();
      cy.scrollTo("bottom");
    }
    const EditIcon = cy.get(".fa.fa-edit");
    for (let Ei of EditIcon) {
      cy.wrap(EditData).each((fields) => {
        cy.scrollTo("bottom");
        cy.get("#documentName").clear({ force: true });
        cy.get("#documentName").type(fields.renameDocs);
        cy.get(":nth-child(2) > .form-group > .form-control").clear({
          force: true,
        });
        cy.get(":nth-child(2) > .form-group > .form-control").type(
          fields.Description
        );
        cy.get(".mat-datepicker-input").clear({ force: true });
        cy.get(".mat-datepicker-input").type(fields.expDate);
        cy.wait(1000);
        cy.get(".btnsave").click({ force: true });
      });
      this.WebElements.UploadSave().click({ force: true });
    }
  }

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

export default DocsUploadDept;
