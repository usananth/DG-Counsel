import RelationshipPage from "../../PageObjects/RelationshipPage";
import Login from "../../PageObjects/LoginPage";

describe("View Relationships Module", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  var data, input, updateGroups;

  before(() => {
    Login.visit();
    cy.fixture("Relationships").then((value) => {
      data = value;
      Login.userName(data.loginData.inputmail);
      Login.userPassword(data.loginData.inputpassword);
      Login.submitBtn();
      input = data.searchFirm.viewSearch;
    });
  });
  beforeEach(() => {
    updateGroups = [data.updateDepts.deptOne, data.updateDepts.deptTwo];
    RelationshipPage.RelationshipMenu();
    RelationshipPage.ViewRelationshipTabs();
  });
  it("TestCase: 1.ExchangeInfo-SharedByUs-UnShared", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.UnsharedSearchDocs(data.unsharedDocs.docOne);
    RelationshipPage.UnsharedDocFound();
    RelationshipPage.AssertSharedDocuments(data.sharedDocsAssert.docOne);
    RelationshipPage.BottomShareButton();
    RelationshipPage.BottomShareButton1();
  });
  it("TestCase: 2.ExchangeInfo-SharedByUs-UnShared-Cancel", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.UnsharedSearchDocs(data.unsharedDocs.docTwo);
    RelationshipPage.UnsharedDocFound();
    RelationshipPage.AssertSharedDocuments(data.sharedDocsAssert.docTwo);
    RelationshipPage.BottomShareCancel();
  });
  it("TestCase: 3.ExchangeInfo-SharedByUs-UnShared-FinalPage", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.UnsharedSearchDocs(data.unsharedDocs.docThree);
    RelationshipPage.UnsharedDocFound();
    RelationshipPage.AssertSharedDocuments(data.sharedDocsAssert.docThree);
    RelationshipPage.BottomShareButton();
    RelationshipPage.BottomShareButton1();
  });
  it("TestCase: 4.ExchangeInfo-SharedByUs-UnShared-Cancel", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.UnsharedSearchDocs(data.unsharedDocs.docFour);
    RelationshipPage.UnsharedDocFound();
    RelationshipPage.AssertSharedDocuments(data.sharedDocsAssert.docFour);
    RelationshipPage.BottomShareButton();
    RelationshipPage.BottomShareCancel1();
  });
  it("TestCase: 5.ExchangeInfo-SharedByUs-Shared", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.SharedDocumentSearchbar(data.sharedDocs.docOne);
    RelationshipPage.SharedDocumentFound();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.AssertUnSharedDocuments(data.unsharedDocsAssert.docOne);
    RelationshipPage.BottomShareButton();
    RelationshipPage.BottomShareButton1();
  });
  it("TestCase: 6.ExchangeInfo-SharedByUs-Shared-Cancel", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.SharedDocumentSearchbar(data.sharedDocs.docOne);
    RelationshipPage.SharedDocumentFound();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.AssertUnSharedDocuments(data.unsharedDocsAssert.docOne);
    RelationshipPage.BottomShareCancel();
  });

  it("TestCase: 7.ExchangeInfo-SharedByUs-Shared-FinalPage", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.SharedDocumentSearchbar(data.sharedDocs.docOne);
    RelationshipPage.SharedDocumentFound();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.AssertUnSharedDocuments(data.unsharedDocsAssert.docOne);
    RelationshipPage.BottomShareButton();
    RelationshipPage.BottomShareButton1();
  });

  it("TestCase: 8.ExchangeInfo-SharedByUs-Shared-Cancel", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.SharedDocumentSearchbar(data.sharedDocs.doc4);
    RelationshipPage.SharedDocumentFound();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.AssertUnSharedDocuments(data.unsharedDocsAssert.doc4);
    RelationshipPage.BottomShareButton();
    RelationshipPage.BottomShareCancel1();
  });
  it("TestCase: 9.ExchangeInfo-SharedByUs-View-Unshared", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.UnsharedSearchDocs(data.unsharedDocs.docOne);
    RelationshipPage.UnsharedDocFound();
    RelationshipPage.UnsharedViewDocument();
    RelationshipPage.ViewClose();
    RelationshipPage.BottomShareButton();
    RelationshipPage.BottomShareButton1();
  });
  it("TestCase: 10.ExchangeInfo-SharedByUs-View-UnShared-Cancel", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.UnsharedSearchDocs(data.unsharedDocs.doc2);
    RelationshipPage.UnsharedDocFound1();
    RelationshipPage.UnsharedViewDocument();
    RelationshipPage.ViewClose();
    RelationshipPage.BottomShareCancel();
  });
  it("TestCase: 11.ExchangeInfo-SharedByUs-View-Shared", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.SharedDocumentSearchbar(data.sharedDocs.doc2);
    RelationshipPage.SharedDocumentFound();
    RelationshipPage.SharedViewDocuments();
    RelationshipPage.ViewClose();
    RelationshipPage.BottomShareButton();
    RelationshipPage.BottomShareButton1();
  });
  it("TestCase: 12.ExchangeInfo-SharedByUs-View-Shared-Cancel", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.SharedDocumentSearchbar(data.sharedDocs.doc2);
    // RelationshipPage.SharedDocumentFound();
    RelationshipPage.SharedViewDocuments();
    RelationshipPage.ViewClose();
    RelationshipPage.BottomShareCancel();
  });

  it("TestCase: 13.ExchangeInfo-SharedByUs-UnShared-AddComments", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.UnsharedSearchDocs(data.unsharedDocs.docOne);
    RelationshipPage.UnsharedDocFound();
    RelationshipPage.AssertSharedDocuments(data.sharedDocsAssert.docOne);
    RelationshipPage.BottomShareButton();
    RelationshipPage.AddComments(data.addComments.comments13);
    RelationshipPage.BottomShareButton1();
  });

  it("TestCase: 14.ExchangeInfo-SharedByUs-UnShared-AddComments-Cancel", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.UnsharedSearchDocs(data.unsharedDocs.docOne);
    RelationshipPage.UnsharedDocFound();
    RelationshipPage.AssertSharedDocuments(data.sharedDocsAssert.docOne);
    RelationshipPage.BottomShareButton();
    RelationshipPage.AddComments(data.addComments.comments13);
    RelationshipPage.BottomShareCancel1();
  });
  it("TestCase: 15.ExchangeInfo-SharedByUs-UnShared-FinalPage-AddComments", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.UnsharedSearchDocs(data.unsharedDocs.docThree);
    RelationshipPage.UnsharedDocFound();
    RelationshipPage.AssertSharedDocuments(data.sharedDocsAssert.docThree);
    RelationshipPage.BottomShareButton();
    RelationshipPage.AddComments(data.addComments.comments13);
    RelationshipPage.BottomShareButton1();
  });
  it("TestCase: 16.ExchangeInfo-SharedByUs-UnShared-FinalPage-AddComments-Cancel", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.UnsharedSearchDocs(data.unsharedDocs.docThree);
    RelationshipPage.UnsharedDocFound();
    RelationshipPage.AssertSharedDocuments(data.sharedDocsAssert.docThree);
    RelationshipPage.BottomShareButton();
    RelationshipPage.AddComments(data.addComments.comments13);
    RelationshipPage.BottomShareCancel1();
  });

  it("TestCase: 17.ExchangeInfo-SharedByUs-Shared-AddComments", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.SharedDocumentSearchbar(data.sharedDocs.docOne);
    RelationshipPage.SharedDocumentFound();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.AssertUnSharedDocuments(data.unsharedDocsAssert.docOne);
    RelationshipPage.BottomShareButton();
    RelationshipPage.AddComments(data.addComments.comments17);
    RelationshipPage.BottomShareButton1();
  });
  it("TestCase: 18.ExchangeInfo-SharedByUs-Shared-AddComments-Cancel", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.SharedDocumentSearchbar(data.sharedDocs.doc18);
    RelationshipPage.SharedDocumentFound();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.AssertUnSharedDocuments(data.unsharedDocsAssert.doc18);
    RelationshipPage.BottomShareButton();
    RelationshipPage.AddComments(data.addComments.comments18);
    RelationshipPage.BottomShareCancel();
    RelationshipPage.BottomShareCancel1();
  });
  it("TestCase: 19.ExchangeInfo-SharedByUs-Shared-AddComments-FinalPage", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.SharedDocumentSearchbar(data.sharedDocs.docOne);
    RelationshipPage.SharedDocumentFound();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.AssertUnSharedDocuments(data.unsharedDocsAssert.docOne);
    RelationshipPage.BottomShareButton();
    RelationshipPage.BottomShareButton1();
  });

  it("TestCase: 20.ExchangeInfo-SharedByUs-Shared-Cancel", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.SharedDocumentSearchbar(data.sharedDocs.doc4);
    RelationshipPage.SharedDocumentFound();
    RelationshipPage.UnsharedDocumentsPlus();
    RelationshipPage.AssertUnSharedDocuments(data.unsharedDocsAssert.doc4);
    RelationshipPage.BottomShareButton();
    RelationshipPage.BottomShareCancel1();
  });

  it.only("TestCase: 21.ExchangeInfo-SharedByUs-UnShared", () => {
    RelationshipPage.SearchbarInput1(input);
    RelationshipPage.ActionButton();
    RelationshipPage.ExchangeInformation();
    RelationshipPage.SharedByUs();
    RelationshipPage.UnsharedDocumentsPlus();
    // RelationshipPage.UnsharedSearchDocs(data.unsharedDocs.docOne);
    // RelationshipPage.UnsharedDocFound();
    RelationshipPage.UnSharedAllDocuments();
    // RelationshipPage.AssertSharedDocuments(data.sharedDocsAssert.docOne);
    // RelationshipPage.BottomShareButton();
    // RelationshipPage.BottomShareButton1();
  });
});
