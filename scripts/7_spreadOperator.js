// Spread Operator

const a1 = [1,2,3]
const a2 = [4,5,6]
const a3 = [...a1, ...a2]
const a4 = [9999, ...a3, 9999]

const carName = {name: "Gol"}
const carBrand = {brand: "VW"}
const otherInfo = {km: 1000, price: "R$ 110.000"}
const car = {...carName, ...carBrand, ...otherInfo}

// console.log(car)