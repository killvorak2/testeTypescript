//boolean
const contaPaga: boolean = false;

//Number
const idade: number = 45;
const avaliacao: number = 5;

//String
const nome: string = "Marcelo Ceribelli";

// Array
const idades: number[] = [10, 29.39]
const idades2: Array<number> = [34, 656, 766]

//Tuple
let jogadores: [string, string, string, number]
jogadores = ["Marcelo", "Antonio", "João", 25]

//Enum
enum StatusAprovacao{
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
}
const StatusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado

//Any
const retornoDaApi: any[] = [123, "Vitor", false];
const retornoDaApi2: any = {
  //......
};

//Void
function printarNaTela(msg: string): void {
  console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar(ojecto: object){
  // ......
}
criar({
  propriedade: 1,
})

//Never
function loopInfinito(): never{
  while(true){}
}

function erro(mensagem: string): never{
  throw new Error(mensagem);
}

function falha() {
  return erro("Algo falhou")
}

// Union Types
function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota} `);
}
exibirNota("10");

//Alias
type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
}

// type Funcionarios = Array<string>;
const funcionarios: Funcionario[] = [{
  nome: "Marcelo",
  sobrenome: "Ceribelli",
  dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for (let funcionario of funcionarios) {
    console.log('Nome do funcionário: ', funcionario.nome);
  }
}

let altura: number | null = 1.6;
altura = null;

type Contato = {
  nome: string;
  telefone1: string;
  telefone2?: string;
}

const contato: Contato = {
  nome: "Marcelo",
  telefone1: "923004440",
}