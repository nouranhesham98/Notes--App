// const { doesNotThrow } = require('assert')
const fs=require('fs')
// const { title } = require('process')

//version 1 (filter)
const addNOTE = (title,body)=>{
    //[{title:"new",body:"body1"}]
    const notes= loadNotes()  //array of objects[]
//     notes.push({
//         //shorthand property
//         title,
//         body
//     })
//     //[{title:"new",body:"body1"}],{title:"title1",body:"body2"}]]
//     console.log(notes) //array of objects
// savenote(notes)

const duplicateTitles = notes.filter((obj)=>
{
    return obj.title===title
})
console.log(duplicateTitles)
if(duplicateTitles.length===0)
{notes.push({
    title,body 
})
savenote(notes)
console.log('Saved Succeess')
}
else {console.log('Error duplicate')
}
}
const loadNotes=()=>{
    try {
    const data= fs.readFileSync('notes.json').toString()
    return JSON.parse(data)  //json --> object
    }
    catch(e){
        return []

    }
}


//delete

const deleteNote = (title)=> {
    const notes=loadNotes()
    const notesTokeep = notes.filter((el) => {
/**
 * title1 !==title4
 */
     return notes.title !==title
    })
    console.log(notesTokeep)
    savenote(notesTokeep)
    console.log('Deleted Succesfually')
}

const savenote=(notes)=>
{
    const savedata=JSON.stringify(notes)
    console.log(savedata)
    fs.writeFileSync('notes.json',savedata)
}
//read
const readnote=(title)=>{
const notes=loadNotes()
const note =notes.find((el)=>{
    /**
     *  title1===title2 f
     * title2===title2  T
     */

    /**
     * title1===new f
     * title2===neww F
     */
   return el.title===title
})
console.log(note)
if(note){
    console.log(note.body)
}
else
{
    console.log('Not Fouunndd')
}
}
module.exports={
 addNOTE,
 deleteNote,
 readnote
}