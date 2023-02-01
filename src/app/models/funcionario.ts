export interface Funcionario {

  id?: String;
  nome: String;
  telefone: String;
  email: String;
  endereco:  {
    rua: String,
    numero: String,
    bairro: String,
  }
  dataNasci: Number;
  funcao: String;

}
