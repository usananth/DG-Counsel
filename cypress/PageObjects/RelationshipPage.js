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
    updateGroupAccess: () => cy.get(".dropdown-item"),
    updateDeptSaveBtn: () => cy.get(".btnsave"),
    assertDepts: () => cy.xpath("//ul)[3]"),
    updateDeptCancelBtn: () => cy.get(".btncancel"),
    alertBtnYes: () => cy.get(".alertbtnyes"),
    alertBtnNo: () => cy.get(".alertbtnno"),
    alertXBtn: () => cy.get(".btn-close"),
    successXBtn: () => cy.get(".close-x"),
  };

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
    this.WebElements.viewRelationship().click();
  }
  //SearchBar Input
  SearchbarInput(input) {
    this.WebElements.viewSearchBar()
      .clear()
      .type(input)
      .type("{downarrow}")
      .type("{enter}");
    this.WebElements.searchBtn().click();
  }
  SearchbarInput1(input) {
    this.WebElements.viewSearchBar().clear().type(input);

    this.WebElements.actionBtn().click({ force: true });
    this.WebElements.updateGroupAccess().click();
  }
  UpdateDepts(updateGroups) {
    for (let i = 0; i < updateGroups.length; i++) {
      cy.xpath(
        "//div[contains(text(),'" + updateGroups[i] + "')]//following::input[1]"
      ).click();
    }
  }

  UpdateDeptSaveBtn() {
    this.WebElements.updateDeptSaveBtn().click();
  }
  AssertDepts(deptAssert) {
    this.WebElements.assertDepts().should("contain", deptAssert);
  }
  UpdateDeptCancelBtn() {
    this.WebElements.updateDeptCancelBtn().click();
  }
  AlertYesBtn() {
    this.WebElements.alertBtnYes().click();
  }
  AlertNoBtn() {
    this.WebElements.alertBtnNo().click();
  }
  AlertXBtn() {
    this.WebElements.alertXBtn().click();
  }
  SuccessPopupXBtn() {
    this.WebElements.successXBtn().click();
  }
  // ActionButton() {
  //   cy.wait(2000);
  //   this.WebElements.actionBtn().click({ force: true });
  //   cy.wait(2000);
  // }
  //Search Button
  // SearchButton() {
  //   cy.wait(2000);
  //   this.WebElements.searchBtn().click();
  // }
  // //Founded Relationship Select
  // SelectFirm() {
  //   cy.wait(1000);

  //   this.WebElements.selectFirm().click();
  //}
}
module.exports = new RelationshipPage();
