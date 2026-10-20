import cadastroElements from '../../support/pages/cadastro/index.js'; 

describe('Acessar alerts, frame & windowns', () => {

  it('Acessar Browser windows', () => {
   cadastroElements.AcessarSite();
   cadastroElements.AcessarAlertsFrameWindows();
   cadastroElements.AcessarBrowserWindows();
   cadastroElements.acessarNewWindow();
   cadastroElements.ValidarPaginaAberta();
})
})