// Filter

const arr = [1,2,3,4,5]
const highNumbers = arr.filter((item) => {
    if(item >= 3 ){
        return item
    }
})


const users = [
    { name: 'Lucas', available: true },
    { name: 'Pedro', available: false },
    { name: 'Chico', available: false },
    { name: 'Wilian', available: true },
]
const availableUsers = users.filter((user) =>  user.available)
