/// <reference types = " Cypress" />
describe("Testing of EA app", () => {
  it("Login aplication", () => {
    //Visiting website
    cy.visit("http://eaapp.somee.com/");
    cy.contains("Login").click();
    cy.url().should("include", "/Account/Login");
    cy.get("#UserName").type("admin");
    cy.get("#Password").type("password");
    cy.get(".btn").click({ force: true });
    //Click Employee List
    cy.contains("Employee List").click();
    //Table
    cy.get(".table")
      .find("tr ")
      .contains("Prashanth")
      .parent()
      .contains("Benefits")
      .click();
  });
});
