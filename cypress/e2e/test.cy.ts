describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://www.pakwheels.com/");
    cy.get("#onesignal-slidedown-cancel-button").click();
    cy.contains("Sign Up").click();
    cy.get("#user_email").type("usmanjabbar09@gmail.com");
    cy.get("#user_display_name").type("Muhammad Usman");
    cy.get("#user_password").type("Hbl@1122");
    cy.get('[placeholder="Enter your password again"]').type("Hbl@1122");
  });
});
