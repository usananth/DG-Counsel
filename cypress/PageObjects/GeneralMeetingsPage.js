class GeneralMeetingsPage {
  WebElements = {
    dashboardMeetingMenu: () => cy.xpath("//span[text()='Meetings']"),

    meetingsCreateTab: () => cy.xpath("//a[text()='Create']"),

    generalEventRadiobutton: () => cy.xpath("//input[@id='generalMatter']"),

    matterNameSelection: () =>
      cy.xpath("//select[@formcontrolname='matter_id']"),

    allDaysCheckbox: () => cy.xpath("//input[@type='checkbox']"),

    notifications: () => cy.xpath("//ul //li //div //a [@aria-label='Close']"),

    meetingLink: () => cy.xpath("//input[@id='meeting-link']"),

    dialinNumber: () => cy.xpath("//input[@id='number']"),

    location: () => cy.xpath("//input[@id='location']"),

    meetingAgenda: () => cy.xpath("//textarea[@name='meeting-agenda']"),

    addTeamMember: () => cy.xpath("//input[@list='browsers']"),

    buttonAddTM: () => cy.xpath("(//input[@value='ADD'])[1]"),

    externalTeamMember: () =>
      cy.xpath("//input[@placeholder='Search External Counsel']"),

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
  GeneralMatterSelection(MatterName) {
    cy.wait(2000);
    cy.xpath("//select[@formcontrolname='matter_id']").select(MatterName);
  }
  SelectTask(Task) {
    cy.wait(500);
    cy.xpath("//select[@formcontrolname='title']").select(Task);
  }
  SelectDate(date) {
    cy.wait(500);
    cy.get("#drp").clear({ force: true }).type(date, { force: true });
  }
  EventStartTime(STime) {
    cy.wait(2000);
    cy.xpath("//select[@formcontrolname='from_ts']").select(STime);
  }
  AllDay() {
    this.WebElements.allDaysCheckbox().click();
  }

  EventEndTime(ETime) {
    cy.wait(500);
    cy.xpath("//select[@formcontrolname='to_ts']").select(ETime);
  }
  TimeZone(EventTime) {
    cy.wait(500);
    cy.xpath("//select[@formcontrolname='timezone_location']").select(
      EventTime
    );
  }

  EventRepetition(Repetition) {
    cy.wait(500);
    cy.xpath("//select[@formcontrolname='repeat_interval']").select(Repetition);
  }
  AddNotifications(time) {
    cy.wait(500);
    cy.get(".row > :nth-child(1) > .form-control").clear().type(time);
  }
  AddNotifications1(durations) {
    cy.wait(500);
    cy.get(".notificationRow").select(durations);
  }

  MeetingsLinkInput(links) {
    cy.wait(500);
    cy.get("#meeting-link").clear().type(links);
  }

  DialupNumber(number) {
    cy.wait(500);
    cy.get("#number").type(number);
  }
  Locations(ELocations) {
    cy.wait(500);
    cy.get("#location").type(ELocations);
  }
  MeetingsAgenta(MAgenta) {
    cy.wait(500);
    cy.xpath("//textarea[@name='meeting-agenda']").type(MAgenta);
  }
  AddButtonTM() {
    this.WebElements.buttonAddTM().click();
  }
  AddTeamMembers(TeamMember1, TeamMember2) {
    cy.wait(500);
    cy.xpath("//input[@list='browsers']").type(TeamMember1);
    this.AddButtonTM();
    cy.xpath("//input[@list='browsers']").type(TeamMember2);
    this.AddButtonTM();
  }
  AddExternalCounsels(AddExtCounsel) {
    cy.wait(500);
    cy.xpath("//select[@id='select']").select(AddExtCounsel);
  }
  ExternalCounselMembers(ExternalMembers) {
    cy.wait(500);
    cy.xpath("//input[@list='browsers-clients']").type(ExternalMembers);
    cy.xpath("(//input[@value='ADD'])[2]").click();
  }
  AddMeetingsDocuments(MeetingsDocs) {
    cy.wait(500);
    cy.xpath("//input[@list='browsers-docs']").type(MeetingsDocs);
    cy.xpath("//input[@value='Attach']").click();
  }

  MeetingsSaveButton() {
    cy.wait(1000);
    cy.scrollTo("bottom");
    cy.get(".btnsave").click();
  }
  ViewChanges() {
    cy.xpath("//button[normalize-space()='View Changes']").click();
  }

  ViewMeetingsDay(eventDate) {
    let sysDate = new Date();
    let isToday = sysDate.getDate();
    let needDate = isToday - eventDate;
    let flag = 1;
    if (needDate < 0) {
      flag = 0;
      needDate = -1 * needDate;
    }

    for (let i = 0; i < needDate; i++) {
      if (flag === 0) {
        cy.get(".righticon").click();
      } else {
        cy.get(".lefticon").click();
      }
    }
  }

  ViewMeetingsWeek(eventWeek) {
    cy.get(".compthree");
    cy.wait(1000);
    const weekOfYear = (date) => {
      const startOfYear = new Date(date.getFullYear(), 0, 1);
      startOfYear.setDate(startOfYear.getDate() + (startOfYear.getDay() % 7));
      return Math.round((date - startOfYear) / 604_800_000);
    };
    let date1 = new Date().toLocaleString();
    let trim1 = date1.slice(0, 9);
    let eveWeek = weekOfYear(new Date(eventWeek));
    let curWeek = weekOfYear(new Date(trim1));

    let needWeek = curWeek - eveWeek;
    let flag = 1;
    if (needWeek < 0) {
      flag = 0;
      needWeek = -1 * needWeek;
    }

    for (let i = 0; i < needWeek; i++) {
      if (flag === 0) {
        cy.get(".righticon").click();
      } else {
        cy.get(".lefticon").click();
      }
    }
    cy.log(trim1);
  }

  ClickMeetings(meetingName) {
    cy.wait(5000);
    cy.xpath(
      "//div[@class='cal-day-columns']//*[text()='" + meetingName + "']"
    ).click({ multiple: true });
  }

  MeetingsCancelButton() {
    cy.wait(500);
    cy.xpath("//button[type='reset']").click();
  }
}
module.exports = new GeneralMeetingsPage();
