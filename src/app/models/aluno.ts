
export interface Aluno {
   id?: String;
   nome: String;
   telefone: String;
   objetivo: String;
   email: String;
   mensalidade: String;
   diaVencimento: Number;
   endereco:  {
     rua: String,
     numero: String,
     bairro: String,
   }
   dataNasci: Number;
}
