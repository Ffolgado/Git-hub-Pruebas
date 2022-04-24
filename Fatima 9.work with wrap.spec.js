/// <reference types = "Cypress" />
describe("Testing of EA App", () => {
  it("Login aplication", () => {
    //Visiting website
    cy.visit("http://eaapp.somee.com/");
    //Long way of working with promise (Closure)
    //cy.get("#loginLink")
    //.then(($link) => {
    //return $link.text();
    //})
    //.as("linkText");
    //Shorthand way of working with promise using invole
    cy.get("#loginLink").invoke("text").as("linkText");
    cy.contains("Login").click();
    cy.get("@linkText").then(($x) => {
      expect($x).is.eql("Login");
    });
    cy.url().should("include", "/Account/Login");
    cy.get("#UserName").type("admin");
    cy.get("#Password").type("password");
    cy.get(".btn").click({ force: true });
    //Click Employee List
    cy.contains("Employee List").click();
    //Table
    //cy.get(".table")
    //.find("tr")
    //.contains("Prashanth")
    //.parent()
    //.contains("Benefits")
    //.click();
    cy.get(".table").find("tr").as("rows");
    cy.get("@rows").then(($row) => {
      cy.wrap($row).click({ multiple: true });
    });
    //Verify the value from a property
    cy.wrap({ name: "Karthik" })
      .should("have.property", "name")
      .and("eq", "Karthik");
    //Using wrap
    cy.get(".table")
      .find("tr")
      .contains("Prashanth")
      .parent()
      .contains("Benefits")
      .click();
  });
});
