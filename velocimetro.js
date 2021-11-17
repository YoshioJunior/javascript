//Velocidade máxima de até 70km/h
//A cada 5km/h acima do limite vc perde um ponto na carteira
//Caso pontos maior que 12 -> 'Carteira Suspensa'
//Math.floor

verificarVelocidade(130)

function verificarVelocidade(velocidade) {
    if (velocidade <= 70)
        console.log('OK, Velocidade dentro do permitido!')
    else {
        const pontos = Math.floor(((velocidade - 70) / 5))
           console.log(`Você perdeu ${pontos} pontos na carteira!`)
        if (pontos >= 12)
             console.log('Carteira Suspensa!')
    }     
}