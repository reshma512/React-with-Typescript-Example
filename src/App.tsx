import React,{useState} from 'react';
import Heading from './components/Heading'
import NotesList from './components/NotesList'
import {CreateNotes} from './components/CreateNotes'
import {Note} from './models/note.model';
function App() {

const [notes,setNotes]=useState<Note[]>([{
  id:(new Date).toString(),
  title:"Meeting",
  text:"Schedule meeting with UI/ team",
  color:"#dfdfdf",
  date:(new Date).toString()
}])

  return (  
    <>
     
      <h1>Hello!</h1>

    
     <Heading />
     <NotesList notes1={notes} setNotes={setNotes}/>
      <CreateNotes notes1={notes} setNotes={setNotes}/>
     
      <div className="card">
       
       
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
