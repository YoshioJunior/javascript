parImp(10)
function parImp(limite){
    for (let i = 0; i <= limite; i++) { 
         if (i % 2 === 0)
             console.log(i,'Número Par')
         else
             console.log(i,'Número Ímpar');
    }
}
