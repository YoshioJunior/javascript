//TIPAGEM DINÂMICA
/*let nome = 'Júnior';
let idade = 49;
let estaAprovado = true;
let sobreNome = undefined;
let corSelecionado = null;

console.log(typeof corSelecionado)
*/
/*let pessoa = {
    nome: 'Júnior',
    idade: 49,
    estaAprovado: true,
    sobreNome: undefined,
    corSelecionado:null
}
console.log(pessoa.idade)
*/
//Realiza uma tarefa, não devolve nada
function dizerNome() {
    console.log('Júnior')
}
dizerNome()

//Faz um cálculo ou operação e retorna algo
function MultiplicaPorDois(valor){
    return valor* 2
}
//console.log(MultiplicaPorDois(5))

let resultado = MultiplicaPorDois(5)
console.log(resultado)
//Operador ternário -> ?  :
let pontos = 200
let tipo = pontos > 100 ? 'Premium' : 'Comum'
console.log('Cliente',tipo)

//Operador Lógico E (&&)
//Retorna TRUE se os dois operandos forem TRUE

let maiorDeIdade = false
let possuiCarteiraDeTrabalho = false
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho

console.log('Pode aplicar: ', podeAplicar)

//Operador Lógico OU (||)
//Retorna TRUE se um dos operandos forem TRUE

//Operador NOT (!)
let candidatoRecusado = !podeAplicar
console.log('Candidato Recusado', candidatoRecusado)

//Falsy:
//undefined
//null
//0
//false
// ''
//NaN - Not a Number

//Truthy

let corPersonalizada = ''
let corPadrao = 'Azul'
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)