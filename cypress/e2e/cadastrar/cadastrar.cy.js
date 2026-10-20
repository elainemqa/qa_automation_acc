
describe('Cadastrar usuario', () => {

  it('Acessar a home e forms e preencher os campos', () => {

    cy.visit('/')

    cy.get('a[href="/forms"]').click({ timeout: 10000 })
    cy.get('a[href="/automation-practice-form"]', { timeout: 10000 })
    cy.should('be.visible').click({ timeout: 10000 })

    cy.get('#firstName', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .type('Elaine')

    cy.get('#lastName', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .type('Silva')

    cy.get('#userEmail', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .type('elaine.silva@example.com')

    cy.get('#gender-radio-2').check({ force: true })

    cy.get('#userNumber', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .type('11999885588')

    /*cy.get('#dateOfBirthInput').click()
      .clear()
      .type('10 May 2000')*/

    // Utilizado o nativeInputValueSetter pois o campo não permite digitar diretamente.
    cy.get('#subjectsInput').then(($input) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype, 'value').set;
      nativeInputValueSetter.call($input[0], 'automação');

      // Dispara o evento para o React detectar a mudança
      $input[0].dispatchEvent(new Event('input', { bubbles: true }));
    });

    cy.get('#hobbies-checkbox-2')
      .should('exist')
      .and('be.visible')
      .check({ force: true })

    //  anexando arquivo 
    cy.get('#uploadPicture').selectFile('cypress/fixtures/DesafioAcc.txt');

    //Preenchendo endereço //
    cy.get('#currentAddress')
      .should('exist')
      .and('be.visible')
      .type('Rua do jangadeiro 248 Candeias')

    cy.get('#react-select-3-input').click()
      .should('exist')
      .and('be.visible')
      .type('NCR', { force: true }).click()
    cy.press(Cypress.Keyboard.Keys.TAB, { timeout: 10000 })

    cy.get('#react-select-4-input').click()
      .should('exist')
      .and('be.visible')
      .type('Delhi', { force: true }).click()
    cy.press(Cypress.Keyboard.Keys.TAB, { timeout: 10000 })

    cy.get('#submit').click({ force: true })

    cy.get('#closeLargeModal')
    .should('exist')
    .and('be.visible')
    .click({ force: true }) 
  })
})