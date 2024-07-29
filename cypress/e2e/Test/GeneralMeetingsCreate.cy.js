import GeneralMeetingsPage from "../../PageObjects/GeneralMeetingsPage";
import Login from "../../PageObjects/LoginPage";

describe("General Events Creations", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  var data,
    task,
    matterSelection,
    eventDate,
    startTime,
    endTime,
    addNoticeTime,
    addNoticeDuration,
    meetingLinks,
    dialupNumber,
    locations,
    meetingAgenda,
    externalCounsel,
    counselMembers,
    meetingDocs,
    addTMember1,
    addTMember2,
    meetingName,
    NeededDate,
    NeedWeek;
  before(() => {
    Login.visit();
    cy.fixture("GeneralEvents").then((value) => {
      data = value;
      Login.userName(data.loginData.inputmail);
      Login.userPassword(data.loginData.inputpassword);
      Login.submitBtn();
      matterSelection = data.selectMatter.matterName;
      task = data.selectTask.taskName;
      eventDate = data.selectDate.eventsDate;
      startTime = data.eventTimes.startTime;
      addNoticeTime = data.eventNotifications.Time;
      addNoticeDuration = data.eventNotifications.Durations;
      meetingLinks = data.meetingLinks.links;
      dialupNumber = data.dialupNumber.number;
      locations = data.locations.locate;
      addTMember1 = data.teamMembers.member1;
      addTMember2 = data.teamMembers.member2;
      meetingAgenda = data.meetsAgenta.meetsAgen;
      externalCounsel = data.externalCounsel.extCounsel;
      //  externalCounselMembers = data.externalCounsel.extCounsel;
      counselMembers = data.counselMembers.counsMembers;
      meetingDocs = data.meetingsDocs.meetDocs;
      NeededDate = data.eventdate.evenDate;
      meetingName = data.meetsName.meetName;
      NeedWeek = data.meetsWeek.meetingweek;
    });
  });
  beforeEach(() => {
    GeneralMeetingsPage.DashboardMeetingsMenu();
    GeneralMeetingsPage.MeetingsCreateTab();
  });

  it("TestCase: 1.Calendar-GeneralEvents-Creation", () => {
    GeneralMeetingsPage.GeneralEventRadioBtn();
    GeneralMeetingsPage.GeneralMatterSelection(matterSelection);
    GeneralMeetingsPage.SelectTask(task);
    GeneralMeetingsPage.SelectDate(eventDate);
    GeneralMeetingsPage.EventStartTime(startTime);
    // GeneralMeetingsPage.EventEndTime(endTime);
    GeneralMeetingsPage.TimeZone(data.timeZone.timeZone);
    GeneralMeetingsPage.AddNotifications(addNoticeTime);
    GeneralMeetingsPage.AddNotifications1(addNoticeDuration);
    GeneralMeetingsPage.MeetingsLinkInput(meetingLinks);
    GeneralMeetingsPage.DialupNumber(dialupNumber);
    GeneralMeetingsPage.Locations(locations);
    GeneralMeetingsPage.MeetingsAgenta(meetingAgenda);
    GeneralMeetingsPage.AddTeamMembers(addTMember1, addTMember2);
    GeneralMeetingsPage.AddExternalCounsels(externalCounsel);
    GeneralMeetingsPage.ExternalCounselMembers(counselMembers);
    GeneralMeetingsPage.AddMeetingsDocuments(meetingDocs);
    GeneralMeetingsPage.MeetingsSaveButton();
    GeneralMeetingsPage.ViewChanges();
    GeneralMeetingsPage.ViewMeetingsDay(NeededDate);
    GeneralMeetingsPage.ClickMeetings(meetingName);
  });

  it.only("TestCase: 2.Calendar-GeneralEvents-Creation", () => {
    GeneralMeetingsPage.GeneralEventRadioBtn();
    GeneralMeetingsPage.GeneralMatterSelection(matterSelection);
    GeneralMeetingsPage.SelectTask(task);
    GeneralMeetingsPage.SelectDate(eventDate);
    GeneralMeetingsPage.EventStartTime(startTime);
    // GeneralMeetingsPage.EventEndTime(endTime);
    GeneralMeetingsPage.TimeZone(data.timeZone.timeZone);
    GeneralMeetingsPage.AddNotifications(addNoticeTime);
    GeneralMeetingsPage.AddNotifications1(addNoticeDuration);
    GeneralMeetingsPage.MeetingsLinkInput(meetingLinks);
    GeneralMeetingsPage.DialupNumber(dialupNumber);
    GeneralMeetingsPage.Locations(locations);
    GeneralMeetingsPage.MeetingsAgenta(meetingAgenda);
    GeneralMeetingsPage.AddTeamMembers(addTMember1, addTMember2);
    GeneralMeetingsPage.AddExternalCounsels(externalCounsel);
    GeneralMeetingsPage.ExternalCounselMembers(counselMembers);
    GeneralMeetingsPage.AddMeetingsDocuments(meetingDocs);
    GeneralMeetingsPage.MeetingsSaveButton();
    GeneralMeetingsPage.ViewChanges();
    GeneralMeetingsPage.ViewMeetingsWeek(NeedWeek);

    //  GeneralMeetingsPage.ClickMeetings(meetingName);
  });
});
