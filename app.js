// core module
// fs >> file system
// require

// terminal --> new terminal --> node app.js

const fs= require('fs');
const notes=require('./notes')

fs.writeFileSync('notes.txt', 'Hellooo')
console.log(fs.readFileSync('notes.txt').toString());

//appeennndd fileeeesync
fs.appendFileSync('notes.txt','  Nannuu');

// Create your own modulee
// require
const x=require('./data')
console.log(x)
console.log(x.nameUser)
console.log(x.name1)
console.log(x.sum1(5,5))


//NPM node package manager
/**
 * npm init -y --> intialize
 * npm i validator
 * 
 */

var validator=require('validator');
console.log(validator.isEmail('omar@gmail.com')); //true

console.log(process.argv)

const command = process.argv[2]
console.log(command)

if(command === 'add')
{console.log('Add item')}

else if( command=== 'delete')
{console.log('Delete  item')}

else
{
    console.log('Error')
}

//node app.js --title="title1"
//process.argv --> parse arguments (object)

//yargs
//npm i yargs

const yargs = require('yargs');
const { notStrictEqual } = require('assert');
console.log(yargs.argv)

// Version1
// 4 commands add/delete/read/list

yargs.command({
    command:'add',
    describe: 'Add notes',
    //optin command deal with
    builder:{
       title:{
        describe:'This is title description in add command',
        demandOption:true,
        type: 'string'
       },
       body:{
        describe:'This is body description in add command',
        type:'string'
       },
    },
    //code executed when using add command
    handler:() => {
        notes.addNOTE(yargs.argv.title,yargs.argv.body)
    
}
})

yargs.command({
   command:'delete',
   describe:'Delete notes command',
   builder:{
    title:{
     describe:' title description in delete command',
     demandOption:true,
     type: 'string'
    },
    body:{
     describe:' body description in delete command',
     type:'string'
    }, },
   handler:()=>{
      notes.deleteNote(yargs.argv.title)
   }

})

yargs.command({
    command:'read',
    describe:'This is read notes command',

    handler:()=>{
notes.readnote(yargs.argv.title)    }
 })


 yargs.command({
    command:'list',
    describe:'list notes command',
    handler:()=>{
     console.log('List notes')
    }
 })


// console.log(yargs.argv)  aw
yargs.parse()


//version 3

/////////////////////
/** terminal
 * --> git init
 * create new file .gitignore / node_modules
 */