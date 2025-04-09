import React from "react";
import { Notes } from "./Notes";
import { Note } from "../models/note.model";

interface INotesListProps {
  notes1: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList = ({ notes1,setNotes }: INotesListProps) => {
  const handleDelete = (id: string) => {
    console.log("note to be deleted:", id);
    setNotes(notes1.filter(note=>note.id!==id));
  };
  const renderNotes = (): React.JSX.Element[] => {
    return notes1.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };
  return (
    <div>
      <h3>Notes List component</h3>
      <div>{renderNotes()}</div>
    </div>
  );
};
export default NotesList;
