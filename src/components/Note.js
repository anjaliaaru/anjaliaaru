import React,{useContext} from 'react';
import  Noteitem from './Noteitem';
const Note = () => {
    const context = useContext(NoteContext);
    const {notes,setNotes}=context;
  return (
    <div>
        <h1>You Notes</h1>
      {notes.map((note)=>{
        return <Noteitem note={note}/>
        <div class="card">
 <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    
  </div>
</div>
      }
      )}

    </div>
  )
}

export default Note