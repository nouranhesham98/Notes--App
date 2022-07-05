const { json } = require("stream/consumers")

const car = {
    model:'BMW',
    color:'Black'

}
console.log(car)
console.log(car.model)

//object --> json JSON.stringfy

const carJson=JSON.stringify(car)
console.log(carJson)
console.log(carJson.model) //undefined

//json --> object JSON.parse()
const carObject=JSON.parse(carJson)
console.log(carObject)

/////////////////
const fs=require('fs')
fs.writeFileSync('cars.json',carJson)

console.log(fs.readFileSync('cars.json').toString())

////////////////////


const person = {
    name:'Nouran',
    age:23
}

//object --> json JSON.stringfy

const personJSON=JSON.stringify(person)
console.log(personJSON)
console.log(personJSON.name) //undefined

//json --> object JSON.parse()
const personObject=JSON.parse(personJSON)
console.log(personObject)

//write in file
const file=require('fs')
file.writeFileSync('person.json',personJSON)

console.log(fs.readFileSync('person.json').toString())
