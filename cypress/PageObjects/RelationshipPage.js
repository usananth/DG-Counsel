class RelationshipPage {
  WebElements = {
    relationshipMenu: () =>
      cy.get(":nth-child(5) > .left-menu-icon > .iconlink > .mattersicon"),

    addRelationship: () => cy.get(".relActive.add > .optionone"),
    viewRelationship: () => cy.get(".optiontwo"),
    searchBar: () => cy.get(".mat-mdc-autocomplete-trigger"),
    viewSearchBar: () => cy.get(".form-control"),

    searchBtn: () => cy.get("#btnadd"),
    dashBoard: () => cy.get("#dashboard-icon > img"),
    entityName: () => cy.get(":nth-child(1) > .form-group > .text-size"),
    contactPerson: () => y.get(":nth-child(3) > .form-group > .text-size"),
    email: () =>
      cy.get(":nth-child(2) > :nth-child(1) > .form-group > .form-control"),
    phoneNumber: () => cy.get("#contactPhone > .form-control"),
    country: () => cy.get(".form-select"),
    assignDepts: () =>
      cy.get(":nth-child(3) > :nth-child(1) > #search > .form-control"),
    searchDept: () =>
      cy.get(":nth-child(1) > #search > .multicheck > .callselect"),
    actionBtn: () => cy.get(".btn"),
    exchangeInformation: () => cy.get(":nth-child(1) > .dropdown-item"),
    sharedByUs: () =>
      cy.get(":nth-child(3) > .switch > .business > .optiontwo"),
    sharedSearch: () =>
      cy.get(
        ":nth-child(1) > :nth-child(1) > :nth-child(2) > .form-group > #search > .form-control"
      ),
    sharedDocFound: () =>
      cy.get(':nth-child(1) > [style="width: 25%;"] > :nth-child(1)'),
    unsharedDocPlus: () =>
      cy.get(
        ".row.ng-star-inserted > :nth-child(1) > .sharedblock > .tog > .fa"
      ),
    unsharedSearch: () =>
      cy.get(
        ":nth-child(3) > :nth-child(1) > :nth-child(2) > .form-group > #search > .form-control"
      ),
    unsharedDocFound: () =>
      cy.get(
        ':nth-child(3) > .table > tbody > :nth-child(1) > [style="width: 25%;"] > :nth-child(1)'
      ),
    unsharedViewBtn: () =>
      cy.get(':nth-child(1) > [style="width: 25%;"] > [data-toggle="modal"]'),
    viewClose: () =>
      cy.xpath(
        "//div[@class='ng-star-inserted']//span[@aria-hidden='true'][normalize-space()='×']"
      ),
    sharedViewBtn: () => cy.get('[data-toggle="modal"]'),

    unsharedDocsAssert: () => cy.get("tbody > .active > :nth-child(1)"),
    sharedDocsAssert: () =>
      cy.get(":nth-child(1) > .table > tbody > :nth-child(n) > :nth-child(1)"),
    bottomShareBtn: () => cy.get(".btnbox > .btnsave"),
    addComments: () => cy.get("#comment"),
    bottomShareCancel: () => cy.get(".btncancel"),
    bottomShareCancel1: () => cy.get(".btncancel"),
    bottomShareBtn1: () => cy.get(".btnbox > .btnsave"),
    successXClose: () => cy.get(".iconclose"),
    commentArea: () => cy.get("#comment"),
    updateGroupAccess: () => cy.get(".dropdown-item"),
    updateDeptSaveBtn: () => cy.get(".btnsave"),
    assertDepts: () => cy.get(":nth-child(4) > ul"),
    updateDeptCancelBtn: () => cy.get(".btncancel"),
    alertBtnYes: () => cy.get(".alertbtnyes"),
    alertBtnNo: () => cy.get(".alertbtnno"),
    alertXBtn: () => cy.get(".btn-close"),
    successXBtn: () => cy.get(".close-x"),

    // Select the Multiple Documents
    unsharedMultipleDocs: () =>
      cy.get(":nth-child(3) > .table > tbody > :nth-child(n) > :nth-child(1)"),
  };

  UnSharedAllDocuments() {
    cy.wait(2000);
    this.WebElements.unsharedMultipleDocs().click({ multiple: true });
  }
  //Dashboard for Refresh
  DashboardMenu() {
    cy.wait(2000);
    cy.reload();
    this.WebElements.dashBoard().click({ force: true });
  }

  //Relationship Menu
  RelationshipMenu() {
    this.WebElements.relationshipMenu().click();
    cy.wait(2000);
    cy.scrollTo("top");
  }

  //Add Relationships Tab
  AddRelationshipTabs() {
    cy.wait(2000);
    this.WebElements.addRelationship().click();
  }
  //View Relationships TAB
  ViewRelationshipTabs() {
    cy.wait(1000);
    this.WebElements.viewRelationship().click({ multiple: true });
  }
  //SearchBar Input
  SearchbarInput(input) {
    this.WebElements.searchBar()
      .clear()
      .type(input)
      .type("{downarrow}")
      .type("{enter}");
    this.WebElements.searchBtn().click();
  }
  SearchbarInput1(input) {
    cy.wait(2000);
    this.WebElements.viewSearchBar().clear().type(input);
  }
  ActionButton() {
    cy.wait(1000);
    this.WebElements.actionBtn().click({ force: true });
  }
  //Exchange Information from Action
  ExchangeInformation() {
    this.WebElements.exchangeInformation().click({ multiple: true });
  }
  // Shared by Us from
  SharedByUs() {
    this.WebElements.sharedByUs().click();
    cy.wait(1000);
    cy.scrollTo("bottom");
  }
  //Shared Document Searchbar
  SharedDocumentSearchbar(sharedDocs) {
    cy.wait(1000);
    this.WebElements.sharedSearch().type(sharedDocs);
  }
  //Shared Document Found
  SharedDocumentFound() {
    cy.wait(1000);
    this.WebElements.sharedDocFound().click();
  }
  //Unshared Document Plus Button
  UnsharedDocumentsPlus() {
    cy.wait(1000);
    this.WebElements.unsharedDocPlus().click({ multiple: true });
  }
  //Unshared Document Searching
  UnsharedSearchDocs(unsharedDocs) {
    cy.wait(2000);
    this.WebElements.unsharedSearch().type(unsharedDocs);
  }
  //Unshared View Button
  UnsharedViewDocument() {
    this.WebElements.unsharedViewBtn().click({ multiple: true, force: true });
    cy.wait(2000);
  }
  SharedViewDocuments() {
    cy.wait(2000);
    this.WebElements.sharedViewBtn().click({ multiple: true, force: true });
  }
  //Document View and Close
  ViewClose() {
    cy.wait(2000);
    this.WebElements.viewClose().click({ multiple: true, force: true });
  }
  //   this.WebElements.viewClose().click({ multiple: true, force: true });
  // }
  //Unshared Documents find and share the Document
  UnsharedDocFound() {
    this.WebElements.unsharedDocFound().click();
    cy.wait(1000);
    cy.scrollTo(0, 500);
  }
  //Unshared Documents find and share the Document
  UnsharedDocFound1() {
    this.WebElements.unsharedDocFound().click();
    cy.wait(1000);
    cy.scrollTo(500, 0);
  }
  //Assert for Shared Documents
  AssertSharedDocuments(sharedDocAsserts) {
    cy.wait(1000);
    this.WebElements.sharedDocsAssert().should("contain", sharedDocAsserts);
    //this.WebElements.assertDepts().should("contain", deptAssert);
  }
  //Assert for UnShared Documents
  AssertUnSharedDocuments(unsharedDocAsserts) {
    cy.wait(3000);
    cy.scrollTo("bottom");
    this.WebElements.unsharedDocsAssert().should("contain", unsharedDocAsserts);
    //this.WebElements.assertDepts().should("contain", deptAssert);
  }
  //Add Comments in Shared and Unshared Documents
  AddComments(comments) {
    cy.wait(1000);
    this.WebElements.addComments().type(comments);
  }
  //Bottom Share Button
  BottomShareButton() {
    cy.wait(1000);
    cy.scrollTo("bottom");
    this.WebElements.bottomShareBtn().click({ force: true });
  }
  //Bottom Share Cancel First Page
  BottomShareCancel() {
    cy.wait(1000);
    cy.scrollTo("bottom");
    this.WebElements.bottomShareCancel().click({ force: true });
  }
  //Bottom Share Cancel Final Page
  BottomShareCancel1() {
    cy.wait(1000);
    this.WebElements.bottomShareCancel1().click();
  }
  BottomShareButton1() {
    cy.wait(1000);
    cy.scrollTo("bottom");
    this.WebElements.bottomShareBtn1().click({ force: true });
    this.WebElements.successXClose().click({ force: true });
  }
  // Comments for newly Shared Documents
  SharedDcoumentsCommentsArea(comments) {
    cy.wait(1000);
    this.WebElements.commentArea(comments);
  }
  //Modify the Group Access
  UpdateGroupAccess() {
    this.WebElements.updateGroupAccess().click();
  }
  UpdateDepts(updateGroups) {
    for (let i = 0; i < updateGroups.length; i++) {
      cy.xpath(
        "//div[contains(text(),'" + updateGroups[i] + "')]//following::input[1]"
      ).click();
    }
  }
  //Update Groups Save button
  UpdateDeptSaveBtn() {
    this.WebElements.updateDeptSaveBtn().click();
  }
  // Updated Dept Assert
  AssertDepts(deptAssert) {
    this.WebElements.assertDepts().should("contain", deptAssert);
  }
  //Updage Group Cancel Button
  UpdateDeptCancelBtn() {
    this.WebElements.updateDeptCancelBtn().click();
  }
  //Update Groups Save Alert Yes Button
  AlertYesBtn() {
    this.WebElements.alertBtnYes().click();
  }
  //Update Groups Save Alert No Button
  AlertNoBtn() {
    this.WebElements.alertBtnNo().click();
  }
  //Update Groups Save Alert  X Button
  AlertXBtn() {
    this.WebElements.alertXBtn().click();
  }
  // Update Groups Save Alert  Success Pop-up X Button
  SuccessPopupXBtn() {
    this.WebElements.successXBtn().click();
  }
}
module.exports = new RelationshipPage();
