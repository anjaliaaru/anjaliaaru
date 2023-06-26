
import NoteContaxt from "/components";
import { defaultMethod } from 'react-router-dom/dist/dom';
const NoteState=(props)=>{
        const state={
            Name:"anjali",
            Class :"5b"
        }
    return(
        <NoteState.provider value={state}>
            {props.children} 
        </NoteState.provider>
    )
}

    


export default  NoteState;
