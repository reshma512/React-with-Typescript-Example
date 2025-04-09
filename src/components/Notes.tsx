import React from 'react'
import { Note } from '../models/note.model'

interface INotesProp {
    note:Note,
    handleDelete:(id: string) => void
}

export const Notes = ({note,handleDelete}: INotesProp) => {
    return (
        <div>
            Note Card:<br/><b>{note.title}</b>,<br/>
            {note.text},<br/>
            {note.date},<br/>
            <button onClick={()=>handleDelete(note.id)}>delete</button>
        </div>
    )
}
