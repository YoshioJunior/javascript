//If...Else

//Se a hora estiver entre 06:00 e 12:00 -> Bom Dia!
//Se estiver entre 12:00 e 18:00 -> Boa Tarde!
//Caso contrário -> Boa Noite!

let hora = 13

if (hora > 6 && hora < 12) {
    console.log('Bom Dia!')
}else if(hora > 12 && hora < 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}