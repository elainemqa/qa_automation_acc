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

    AcessarAlertsFrameWindows() {
        cy.contains('span', 'Alerts, Frame & Windows')
            .should('be.visible')
            .click({ timeout: 10000 })
    }

    AcessarBrowserWindows() {
        cy.contains('span', 'Browser Windows')
            .should('be.visible')
            .click({ timeout: 10000 })
    }

    acessarNewWindow() {
        cy.get('#windowButton')
            .should('be.visible')
            .click({ timeout: 10000 })
    }

    ValidarPaginaAberta() {
        it('Deve abrir a nova tela Sample Page', () => {

            cy.visit('https://demoqa.com/browser-windows');
            cy.contains('button', 'New Tab').click();
            // Validar a nova tela
            cy.url().should('eq', 'https://demoqa.com/sample');
            cy.get('#sampleHeading', { timeout: 10000 })
                .should('be.visible')
                .and('have.text', 'This is a sample page');
        });
    }
    AcessarElements() {
        cy.contains('.header-text', 'Elements')
            .should('be.visible')
            .click();

    }
    AcessarWebTables() {
        cy.contains('span', 'Web Tables')
            .should('be.visible')
            .click()
    }
    CriarNovoRegistro() {
        cy.get('#addNewRecordButton')
            .should('be.visible')
            .click({ timeout: 10000 })
    }
    PreencherNovoRegistro() {
        cy.get('#firstName', { timeout: 10000 }).type('Elaine')
        cy.get('#lastName', { timeout: 10000 }).type('lopes')
        cy.get('#userEmail', { timeout: 10000 }).type('elaine.lopes@example.com')
        cy.get('#age', { timeout: 10000 }).type('25')
        cy.get('#salary', { timeout: 10000 }).type('5000')
            .should('exist')
            .and('be.visible')
        cy.get('#department', { timeout: 10000 }).type('Engineering')
        cy.get('#submit', { timeout: 10000 }).click()     

    }

    DeletarNovoRegistro() {
        cy.get('#delete-record-4',{ force: true }, { timeout: 10000 })
            .should('be.visible')
            .click({ timeout: 10000 })
    }

} export default new cadastroElements;