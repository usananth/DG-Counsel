describe("Iteract with multiple elements", function () {
  beforeEach(() => {
    cy.visit("http://staging.corp.lauditor.com/login");
    cy.get('input[id="id_email"]').type("gradle.ananth@gmail.com");
    cy.get('input[id="id_password"]').type("Test@123");
    cy.get('button[type="submit"]').click();
  });
  it("Document Upload", () => {
    cy.get(
      ":nth-child(3) > .left-menu-icon > .iconlink > .mattersicon"
    ).click();
    cy.get(".upload").click();
    cy.get(".multicheck > .fa").click();
    cy
      .xpath
      //div//label[text()="TestDept"]//following::input[1]
      ()
      .click();
    //   .should("contains.text", "Document Test")
    //   .each(function ($el, index, $listOfElements) {
    //     cy.log($el.text());
    //     if ($el.text === "Document Test") {
    //       $el.click();
    //     }
    //   });
    //div[@class='input-group index court'] //div[@class='multicheck form-control textbox']
  });
});
