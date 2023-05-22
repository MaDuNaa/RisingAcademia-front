
export interface Aluno {
  id?: String;
  nome: String;
  telefone: String;
  objetivo: String;
  email: String;
  mensalidade: String;
  diaVencimento: Number;
  quantidadeMensalidadesPagas: String;
  dataPagamento: Number;
  antropometria: {
    torax: String;
    cintura: String;
    quadril: String;
    antebracoDireito: String;
    antebracoEsquerdo: String;
    bracoDireito: String;
    bracoEsquerdo: String;
    coxaDireita: String;
    coxaEsquerda: String;
    pantorilhaDireita: String;
    pantorilhaEsquerda: String;
    estatura: String;
    peso: String;
  };
  endereco: {
    rua: String,
    numero: String,
    bairro: String,
  };
  dataNasci: Number;
}
