import cadastroElements from '../../support/pages/cadastro/index.js'; 


describe('Cadastrar usuario', () => {

  it('Acessar a home e forms e preencher os campos', () => {

    cadastroElements.AcessarSite();
    cadastroElements.preencherNome();
    cadastroElements.preencherSobrenome();
    cadastroElements.preencherEmail();
    cadastroElements.selecionarGenero();
    cadastroElements.preencherNumero();
    cadastroElements.preecherDataNascimento();
    cadastroElements.preencherSubjects();
    cadastroElements.selecionarHobbies();
    cadastroElements.anexarArquivo();
    cadastroElements.preecherEndereco();
    cadastroElements.selecionarEstado();
    cadastroElements.selecionarCidade();
    cadastroElements.finalizarCadastro();
     
  })
})