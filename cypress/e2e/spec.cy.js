describe('template spec', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  it('passes', () => {
    cy.visit('/')

    /*cy.get('a[href*="https://www.facebook.com/AirportLabs"]').should($a => {
      expect($a.attr('href'), 'href').to.equal('https://www.facebook.com/AirportLabs')
      expect($a.attr('target'), 'target').to.equal('_blank')
    }).click()*/

   /* cy.window().then(win => {
      cy.stub(win, 'open').callsFake((url, target) => {
        expect(target).to.be.undefined
        // call the original `win.open` method
        // but pass the `_self` argument
        return win.open.wrappedMethod.call(win, url, '_self')
      }).as('open')
    })
    cy.get('a[href="https://learning.airportlabs.com"]').eq(1).click()*/

    const tabUrl = "https://learning.airportlabs.com/"

    /*// Stub the window.open method
    cy.window().then((win) => {
      cy.stub(win, "open").as("windowOpen")
    })*/

    // Click on the link
  /*  cy.get('a[href="https://learning.airportlabs.com"]').eq(1)
        .invoke('removeAttr', 'target')
        .click();*/

    cy.get('a[href="https://learning.airportlabs.com"]').eq(1).then(($anchor) => {
      // Attach a click event handler to prevent the default action
      $anchor.on('click', (e) => {
        e.preventDefault();
      });
    }).click();

    cy.get('a[href="https://learning.airportlabs.com"]').eq(1).invoke('attr', 'href').then((href) => {
      cy.visit(href);
    });

    // Assert that window.open was called with correct URL
    /*cy.get("@windowOpen").should("be.calledWith", tabUrl)

    // Your existing logic to navigate to new URL in the same tab (optional)
    cy.window().then((win) => {
      win.location.href = tabUrl
    })*/
  })
})