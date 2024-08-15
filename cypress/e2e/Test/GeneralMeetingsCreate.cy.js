import GeneralMeetingsPage from "../../PageObjects/GeneralMeetingsPage";
import Login from "../../PageObjects/LoginPage";
import generalData from '../../fixtures/GeneralEvents.json'

describe("General Events Creations", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  before(() => {
    Login.visit();
    Login.userName(generalData.loginData.inputmail);
    Login.userPassword(generalData.loginData.inputpassword);
    Login.submitBtn();
    
  });
  beforeEach(() => {
    GeneralMeetingsPage.DashboardMeetingsMenu();
    GeneralMeetingsPage.MeetingsCreateTab();
  });

  it.only("TestCase: 1.Calendar-GeneralEvents-Creation", () => {
    GeneralMeetingsPage.GeneralEventRadioBtn();
    GeneralMeetingsPage.GeneralMatterSelection(generalData.selectMatter.matterName);
    GeneralMeetingsPage.SelectTask(generalData.selectTask.taskName);
    GeneralMeetingsPage.SelectDate(generalData.selectDate.eventsDate);
    GeneralMeetingsPage.EventStartTime(generalData.eventTimes.startTime);
    // GeneralMeetingsPage.EventEndTime(endTime);
    GeneralMeetingsPage.TimeZone(generalData.timeZone.timeZone);
    GeneralMeetingsPage.AddNotifications(generalData.eventNotifications.Time);
    GeneralMeetingsPage.AddNotifications1(generalData.eventNotifications.Durations);
    GeneralMeetingsPage.MeetingsLinkInput(generalData.meetingLinks.links);
    GeneralMeetingsPage.DialupNumber(generalData.dialupNumber.number);
    GeneralMeetingsPage.Locations(generalData.locations.locate);
    GeneralMeetingsPage.MeetingsAgenta(generalData.meetsAgenta.meetsAgen);
    GeneralMeetingsPage.AddTeamMembers(generalData.teamMembers.member1, generalData.teamMembers.member2);
    GeneralMeetingsPage.AddExternalCounsels(generalData.externalCounsels.extCounsel);
    GeneralMeetingsPage.ExternalCounselMembers(generalData.counselMember.counsMembers);
    GeneralMeetingsPage.AddMeetingsDocuments(generalData.meetingsDocs.meetDocs);
    GeneralMeetingsPage.MeetingsSaveButton();
    GeneralMeetingsPage.ViewChanges();
    GeneralMeetingsPage.ViewMeetingsDay(generalData.eventdate.evenDate);
    GeneralMeetingsPage.ClickMeetings(generalData.meetsName.meetName);
  });

  it("TestCase: 2.Calendar-GeneralEvents-Creation", () => {
    GeneralMeetingsPage.GeneralEventRadioBtn();
    GeneralMeetingsPage.GeneralMatterSelection(generalData.selectMatter.matterName);
    GeneralMeetingsPage.SelectTask(generalData.selectTask.taskName);
    GeneralMeetingsPage.SelectDate(generalData.selectDate.eventsDate);
    GeneralMeetingsPage.EventStartTime(generalData.eventTimes.startTime);
    // GeneralMeetingsPage.EventEndTime(endTime);
    GeneralMeetingsPage.TimeZone(generalData.timeZone.timeZone);
    GeneralMeetingsPage.AddNotifications(generalData.eventNotifications.Time);
    GeneralMeetingsPage.AddNotifications1(generalData.eventNotifications.Durations);
    GeneralMeetingsPage.MeetingsLinkInput(generalData.meetingLinks.links);
    GeneralMeetingsPage.DialupNumber(generalData.dialupNumber.number);
    GeneralMeetingsPage.Locations(generalData.locations.locate);
    GeneralMeetingsPage.MeetingsAgenta(generalData.meetsAgenta.meetsAgen);
    GeneralMeetingsPage.AddTeamMembers(generalData.teamMembers.member1, generalData.teamMembers.member2);
    GeneralMeetingsPage.AddExternalCounsels(generalData.externalCounsels.extCounsel);
    GeneralMeetingsPage.ExternalCounselMembers(generalData.counselMember.counsMembers);
    GeneralMeetingsPage.AddMeetingsDocuments(generalData.meetingsDocs.meetDocs);
    GeneralMeetingsPage.MeetingsSaveButton();
    GeneralMeetingsPage.ViewChanges();
    GeneralMeetingsPage.ViewMeetingsWeek(generalData.meetsWeek.meetingweek);

    //  GeneralMeetingsPage.ClickMeetings(generalData.meetsName.meetName);
  });

  it("TestCase: 2.Calendar-GeneralEvents-Creation", () => {
    GeneralMeetingsPage.GeneralEventRadioBtn();
    GeneralMeetingsPage.GeneralMatterSelection(generalData.selectMatter.matterName);
    GeneralMeetingsPage.SelectTask(generalData.selectTask.taskName);
    GeneralMeetingsPage.SelectDate(generalData.selectDate.eventsDate);
    GeneralMeetingsPage.EventStartTime(generalData.eventTimes.startTime);
    // GeneralMeetingsPage.EventEndTime(endTime);
    GeneralMeetingsPage.TimeZone(generalData.timeZone.timeZone);
    GeneralMeetingsPage.AddNotifications(generalData.eventNotifications.Time);
    GeneralMeetingsPage.AddNotifications1(generalData.eventNotifications.Durations);
    GeneralMeetingsPage.MeetingsLinkInput(generalData.meetingLinks.links);
    GeneralMeetingsPage.DialupNumber(generalData.dialupNumber.number);
    GeneralMeetingsPage.Locations(generalData.locations.locate);
    GeneralMeetingsPage.MeetingsAgenta(generalData.meetsAgenta.meetsAgen);
    GeneralMeetingsPage.AddTeamMembers(generalData.teamMembers.member1, generalData.teamMembers.member2);
    GeneralMeetingsPage.AddExternalCounsels(generalData.externalCounsels.extCounsel);
    GeneralMeetingsPage.ExternalCounselMembers(generalData.counselMember.counsMembers);
    GeneralMeetingsPage.AddMeetingsDocuments(generalData.meetingsDocs.meetDocs);
    GeneralMeetingsPage.MeetingsSaveButton();
    GeneralMeetingsPage.ViewChanges();
    GeneralMeetingsPage.ViewMeetingsWeek(generalData.meetsWeek.meetingweek);

    //  GeneralMeetingsPage.ClickMeetings(generalData.meetsName.meetName);
  });
  
  
  it("TestCase: 24.Calendar-GeneralEvents-Creation", () => {
    GeneralMeetingsPage.GeneralEventRadioBtn();
    GeneralMeetingsPage.GeneralMatterSelection(generalData.selectMatter.matterName);
    GeneralMeetingsPage.SelectTask(generalData.selectTask.taskName);
    GeneralMeetingsPage.SelectDate(generalData.selectDate.eventsDate);
    GeneralMeetingsPage.EventStartTime(generalData.eventTimes.startTime);
    // GeneralMeetingsPage.EventEndTime(endTime);
    GeneralMeetingsPage.TimeZone(generalData.timeZone.timeZone);
    GeneralMeetingsPage.AddNotifications(generalData.eventNotifications.Time);
    GeneralMeetingsPage.AddNotifications1(generalData.eventNotifications.Durations);
    GeneralMeetingsPage.MeetingsLinkInput(generalData.meetingLinks.links);
    GeneralMeetingsPage.DialupNumber(generalData.dialupNumber.number);
    GeneralMeetingsPage.Locations(generalData.locations.locate);
    GeneralMeetingsPage.MeetingsAgenta(generalData.meetsAgenta.meetsAgen);
    GeneralMeetingsPage.AddTeamMembers(generalData.teamMembers.member1, generalData.teamMembers.member2);
    GeneralMeetingsPage.AddExternalCounsels(generalData.externalCounsels.extCounsel);
    GeneralMeetingsPage.ExternalCounselMembers(generalData.counselMember.counsMembers);
    GeneralMeetingsPage.AddMeetingsDocuments(generalData.meetingsDocs.meetDocs);
    GeneralMeetingsPage.MeetingsSaveButton();
    GeneralMeetingsPage.ViewChanges();
    GeneralMeetingsPage.ViewMeetingsDay(NeedDate);
    GeneralMeetingsPage.ClickMeetings(generalData.meetsName.meetName);
  });

});
