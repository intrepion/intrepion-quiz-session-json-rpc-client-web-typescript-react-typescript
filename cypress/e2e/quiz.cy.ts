describe("Quiz app", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Quiz");
  });
});
