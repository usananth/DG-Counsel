class GeneralMeetingsPage {
  WebElements = {
    dashboardMeetingMenu: () => cy.xpath("//span[text()='Meetings']"),
    meetingsCreateTab: () => cy.xpath("//a[text()='Create']"),
    generalEventRadiobutton: () => cy.xpath("//input[@id='generalMatter']"),
    dateOfFilling: () => cy.get("input#drp"),
    allDaysCheckbox: () => Cy.xpath("//input[@type='checkbox']"),
    notifications: () => cy.xpath("//ul //li //div //a [@aria-label='Close']"),
    meetingLink: () => cy.xpath("//input[@id='meeting-link']"),

    dialinNumber: () => cy.xpath("//input[@id='number']"),

    location: () => cy.xpath("//input[@id='location']"),

    meetingAgenda: () => cy.xpath("//textarea[@name='meeting-agenda']"),

    addTeamMember: () => cy.xpath("//input[@list='browsers']"),

    buttonAddTM: () => cy.xpath("(//input[@value='ADD'])[1]"),

    externalTeamMember: () =>
      cy
        .xpath("//input[@placeholder='Search External Counsel']", {
          timeout: 10000,
        })
        .should("be.visible"),

    buttonAddExternalTM: () => cy.xpath("(//input[@value='ADD'])[2]"),

    document: () => cy.xpath("//input[@placeholder='Search Document']"),

    buttonAddDoc: () => cy.xpath("//input[@value='Attach']"),

    buttonSave: () => cy.xpath("//div //button[text()='Save']"),

    buttonCancel: () => cy.xpath("//div //button[text()='Cancel']"),

    alertPopupViewChanges: () =>
      cy.xpath("//div //button[text()='View Changes']"),

    // View Day

    viewDay: () => cy.xpath("//div //a[text()='Day']"),
  };

  DashboardMeetingsMenu() {
    this.WebElements.dashboardMeetingMenu().click();
  }
  MeetingsCreateTab() {
    this.WebElements.meetingsCreateTab().click();
  }
  GeneralEventRadioBtn() {
    this.WebElements.generalEventRadiobutton().click();
  }
}
module.exports = new GeneralMeetingsPage();
