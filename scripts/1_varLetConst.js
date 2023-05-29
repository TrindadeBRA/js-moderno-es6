// 1 - var,let e const

var x = 10
var y = 15
if(y > 10) {
    var x = 5 // var sobrescreve o valor da variavel
    // console.log(x)
}


let a = 10
let b = 15
if(b > 10) {
    let a = 8 // let NAO sobrescreve o valor da variavel
    // console.log(a)
}


const xyz = "Lucas"; // const não pode alterar o valor
// const xyz = "João"; >> Erro