import GeneralMeetingsPage from "../../PageObjects/GeneralMeetingsPage";
import Login from "../../PageObjects/LoginPage";
import loginCred from '../../fixtures/GeneralEvents.json'

describe("General Events Creations", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  var data,
    task,
    // matterSelection,
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
    // cy.fixture("GeneralEvents").then((value) => {
    //   loginCred = value;
    Login.userName(loginCred.loginData.inputmail);
    Login.userPassword(loginCred.loginData.inputpassword);
    Login.submitBtn();
    // matterSelection = loginCred.selectMatter.matterName;
    task = loginCred.selectTask.taskName;
    eventDate = loginCred.selectDate.eventsDate;
    startTime = loginCred.eventTimes.startTime;
    addNoticeTime = loginCred.eventNotifications.Time;
    addNoticeDuration = loginCred.eventNotifications.Durations;
    meetingLinks = loginCred.meetingLinks.links;
    dialupNumber = loginCred.dialupNumber.number;
    locations = loginCred.locations.locate;
    addTMember1 = loginCred.teamMembers.member1;
    addTMember2 = loginCred.teamMembers.member2;
    meetingAgenda = loginCred.meetsAgenta.meetsAgen;
    externalCounsel = loginCred.externalCounsel.extCounsel;
    //externalCounselMembers = loginCred.externalCounsel.extCounsel;
    counselMembers = loginCred.counselMembers.counsMembers;
    meetingDocs = loginCred.meetingsDocs.meetDocs;
    NeededDate = loginCred.eventdate.evenDate;
    meetingName = loginCred.meetsName.meetName;
    NeedWeek = loginCred.meetsWeek.meetingweek;
    // });
  });
  beforeEach(() => {
    GeneralMeetingsPage.DashboardMeetingsMenu();
    GeneralMeetingsPage.MeetingsCreateTab();
  });

  it.only("TestCase: 1.Calendar-GeneralEvents-Creation", () => {
    GeneralMeetingsPage.GeneralEventRadioBtn();
    GeneralMeetingsPage.GeneralMatterSelection(loginCred.selectMatter.matterName);
    GeneralMeetingsPage.SelectTask(task);
    GeneralMeetingsPage.SelectDate(eventDate);
    GeneralMeetingsPage.EventStartTime(startTime);
    // GeneralMeetingsPage.EventEndTime(endTime);
    GeneralMeetingsPage.TimeZone(loginCred.timeZone.timeZone);
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

  it("TestCase: 2.Calendar-GeneralEvents-Creation", () => {
    GeneralMeetingsPage.GeneralEventRadioBtn();
    GeneralMeetingsPage.GeneralMatterSelection(matterSelection);
    GeneralMeetingsPage.SelectTask(task);
    GeneralMeetingsPage.SelectDate(eventDate);
    GeneralMeetingsPage.EventStartTime(startTime);
    // GeneralMeetingsPage.EventEndTime(endTime);
    GeneralMeetingsPage.TimeZone(loginCred.timeZone.timeZone);
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

  it("TestCase: 2.Calendar-GeneralEvents-Creation", () => {
    GeneralMeetingsPage.GeneralEventRadioBtn();
    GeneralMeetingsPage.GeneralMatterSelection(matterSelection);
    GeneralMeetingsPage.SelectTask(task);
    GeneralMeetingsPage.SelectDate(eventDate);
    GeneralMeetingsPage.EventStartTime(startTime);
    // GeneralMeetingsPage.EventEndTime(endTime);
    GeneralMeetingsPage.TimeZone(loginCred.timeZone.timeZone);
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

  it("TestCase: 24.Calendar-GeneralEvents-Creation", () => {
    GeneralMeetingsPage.GeneralEventRadioBtn();
    GeneralMeetingsPage.GeneralMatterSelection(matterSelection);
    GeneralMeetingsPage.SelectTask(task);
    GeneralMeetingsPage.SelectDate(eventDate);
    GeneralMeetingsPage.EventStartTime(startTime);
    // GeneralMeetingsPage.EventEndTime(endTime);
    GeneralMeetingsPage.TimeZone(loginCred.timeZone.timeZone);
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
    GeneralMeetingsPage.ViewMeetingsDay(NeedDate);
    GeneralMeetingsPage.ClickMeetings(meetingName);
  });

});
