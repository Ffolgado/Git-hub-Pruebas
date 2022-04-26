/// <reference types="Cypress" />

describe("Testing of Todo-Backend", () => {
  before(() => {
    //Visiting website
    cy.visit(
      "https://www.todobackend.com/client/index.html?https://mysterious-thicket-31854.herokuapp.com/"
    );
  });

  it("Frontpage can be opened", () => {
    cy.url().should("include", "/mysterious-thicket-31854.herokuapp.com/");
  });

  /*it.only("Task creation", () => {
    cy.get("#new-todo").type("a todo{enter}");
    cy.log("ELEM" + cy.get("#todo-list li").its("length"));
  });*/

  it.only("Task creation", () => {
    cy.get("#new-todo").type("a todo{enter}");
    cy.log("ELEM" + cy.get("#todo-list li").should("length", 2));
  });

  it("Edit task", () => {
    cy.get("#todo-list li").last().dblclick();
    cy.get("#todo-list li").last().clear();
    cy.get("#todo-list li").last().type("prueba{enter}");
  });

  it("Select task", () => {
    ///De momento suponemos que solo hay una tarea
    cy.get("#todo-count").should("have.text", "1 item left");
    cy.get("#todo-list li .toggle").click();
    cy.get("#todo-count").should("have.text", "0 items left");
  });

  it("Select multi-Task", () => {
    cy.get("#todo-list li .toggle").click(); //Test anterior deja marcado el elemento y si hacemos el selct todo lo descmarca
    cy.get("#toggle-all").click();
  });
});
