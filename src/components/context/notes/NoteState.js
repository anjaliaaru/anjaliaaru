import NoteContext from "./NoteContext";
import {useState} from "react";


const NoteState = (props) => {
        const notesInitial=[{
"_id":"61322f19553781a8ca8d0e08",
"user":"6131dc5e3e4037cd4734a066",
"title":"My Title",
"description":"please wake up early",
"tag":"personal",
"date":"2021-09-03T14:20:09.668Z",
"_v":0},
{
"_id":"61322f19553781a8ca8d0e08",
"user":"6131dc5e3e4037cd4734a066",
"title":"My Title",
"description":"please wake up early",
"tag":"personal",
"date":"2021-09-03T14:20:09.668Z",
"_v":0
  }]
  const [notes,setNotes]= useState(notesInitial) ;   
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}        
        </NoteContext.Provider>
    )  
}
export default  NoteState;
