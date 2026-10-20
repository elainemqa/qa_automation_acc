import cadastroElements from '../../support/pages/cadastro/index.js'; 

describe('Acessar alerts, frame & windowns', () => {

  it.only('Acessar Browser windows', () => {
    cadastroElements.AcessarSite();
    cadastroElements.AcessarElements();
    cadastroElements.AcessarWebTables();
    cadastroElements.CriarNovoRegistro();
    cadastroElements.PreencherNovoRegistro();
    cadastroElements.DeletarNovoRegistro();

})
})