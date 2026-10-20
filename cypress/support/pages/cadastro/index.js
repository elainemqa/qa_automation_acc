class cadastroElements {
    AcessarSite() {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('a[href="/automation-practice-form"]', { timeout: 10000 })
        cy.should('be.visible').click({ timeout: 10000 })
    }
    preencherNome() {
        cy.get('#firstName', { timeout: 10000 })
            .should('exist')
            .and('be.visible')
            .type('Elaine')
    }

    preencherSobrenome() {
        cy.get('#lastName', { timeout: 10000 })
            .should('exist')
            .and('be.visible')
            .type('Silva');
    }

    preencherEmail() {
        cy.get('#userEmail', { timeout: 10000 })
            .should('exist')
            .and('be.visible')
            .type('elaine.silva@example.com')
    }

    selecionarGenero() {
        cy.get('#gender-radio-2').check({ force: true })
    }

    preencherNumero() {
        cy.get('#userNumber', { timeout: 10000 })
            .should('exist')
            .and('be.visible')
            .type('11999885588')
    }

    preecherDataNascimento() {
        cy.get('#dateOfBirthInput', { timeout: 10000 })
            .should('exist')
            .and('be.visible')
            .click({ force: true })
            .type('10 May 1990{enter}')
    }
    preencherSubjects() {
        // Utilizado o nativeInputValueSetter pois o campo não permite digitar diretamente.
        cy.get('#subjectsInput').then(($input) => {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype, 'value').set;
            nativeInputValueSetter.call($input[0], 'automação');

            // Dispara o evento para o React detectar a mudança
            $input[0].dispatchEvent(new Event('input', { bubbles: true }));
        });
    }

    selecionarHobbies() {
        cy.get('#hobbies-checkbox-2')
            .should('exist')
            .and('be.visible')
            .check({ force: true })
    }

    anexarArquivo() {
        cy.get('#uploadPicture').selectFile('cypress/fixtures/DesafioAcc.txt');
    }
    preecherEndereco() {
        //Preenchendo endereço //
        cy.get('#currentAddress')
            .should('exist')
            .and('be.visible')
            .type('Rua do jangadeiro 248 Candeias')
    }
    selecionarEstado() {
        cy.get('#react-select-3-input').click()
            .should('exist')
            .and('be.visible')
            .type('NCR', { force: true }).click()
        cy.press(Cypress.Keyboard.Keys.TAB, { timeout: 10000 })
    }

    selecionarCidade() {
        cy.get('#react-select-4-input').click()
            .should('exist')
            .and('be.visible')
            .type('Delhi', { force: true }).click()
        cy.press(Cypress.Keyboard.Keys.TAB, { timeout: 10000 })
    }

    finalizarCadastro() {
        cy.get('#submit').click({ force: true })
    }

    fecharModal() {
        cy.get('#closeLargeModal')
            .should('exist')
            .and('be.visible')
            .click({ force: true })
    }
} export default new cadastroElements;