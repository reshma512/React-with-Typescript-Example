import React, { useState } from 'react'
import { Note } from '../models/note.model';

interface ICreateNotesProps {
    notes1: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export const CreateNotes = ({notes1,setNotes}: ICreateNotesProps) => {
    const [error,setError]=React.useState<string>("")
    const titleRef=React.useRef<HTMLInputElement>(null);
    const textRef=React.useRef<HTMLInputElement>(null);
    const colorRef=React.useRef<HTMLInputElement>(null);
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>
        ):void=>{
            e.preventDefault();
            console.log("value:",titleRef.current.value, textRef.current.value,colorRef.current.value)
            if(titleRef.current?.value===""||textRef.current?.value===""){
                return setError("All fields are manditary");

            }
            setError("")
            setNotes([...notes1, {
                id:(new Date()).toString(),
                title:titleRef.current.value,
                text:textRef.current.value,
                color:colorRef.current.value,
                date:(new Date()).toString()

            }]);
            titleRef.current.value="",
            textRef.current.value=""

    }
    return (
        <div>
            <h3>Create Notes</h3>
    {error}
            <form onSubmit={(e)=>handleSubmit(e)}>
            <label > Title:</label>
           <input type="text" placeholder="Enter title for note" ref={titleRef}/>
           <label >Text:</label>
            <input type="textarea" placeholder="Enter text for note" ref={textRef}/>
           <label htmlFor="colorInput">Notes color</label>

           <input type="color" defaultValue="#dfdfdf" title="choose your color" ref={colorRef}/>
          <button type="submit" >Submit</button>
          </form>
        </div>
    )
}
