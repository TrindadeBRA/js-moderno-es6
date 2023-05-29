// 2 - Arrow function

//Original
const sum = function sum(a, b) {
    return a + b
}

//Arrow
const arrowSum = (a, b) => {
    return a + b
}

//Arrow sem corpo
const arrowSum2 = (a, b) => a + b

//Arrow com corpo
const greeting = (name) => {
    if(name) {
        return `Olá ${name}, tudo bem?`
    } else {
        return "Olá!!"
    }
}

//Arrow sem parametros
const testeArrow = () => console.log("testando!")


const user = {
    name: "Lucas",

    sayUserName() { // Modo antigo bindando o this
        var self = this
        setTimeout(function() {
            // console.log(self)
            console.log("Username: ", self.name)
        }, 500)
    },

    arrowSayUserName(){
        setTimeout(() => { // Arrow function usando o this
            console.log("Username: ", this.name)
        }, 500)
    },

}
