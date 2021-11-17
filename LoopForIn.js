//4.For...In
const pessoa = {
    nome: 'Junior',
    idade: 49
}
for(let chave in pessoa) {
    console.log(chave,pessoa['nome'])
}
const cores = ['Vermelho', 'Azul','Verde']
for(let indice in cores) {
     console.log(indice,cores[indice])
}