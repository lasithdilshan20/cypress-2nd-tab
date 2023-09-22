describe('template spec', () => {
  it('passes', () => {
    cy.visit('cypress/index.html')
    //cy.get('button').click()

    const tabUrl = "nextTab.html"
    cy.window().then((win) => {
      cy.stub(win, "open").as("windowOpen")
    })
    cy.get("button").click()
    cy.get("@windowOpen").should("be.calledWith", tabUrl)
    cy.window().then((win) => {
      win.location.href = tabUrl
    })
    cy.url().should("contain", "www.facebook.com")
  })
})