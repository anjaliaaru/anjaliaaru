
import NoteContext from "./notecontext";
import {useState} from "react";

const NoteState=(props)=>{
        const s1 ={
            "Name":"anjali",
            "Class":"5b"
        }
        
        const [state,setState]=useState(s1);
        const update=()=>{
            setTimeout(()=>{
                setState({
                    "Name":"lerry",
                    "class":"10b"
                })
            },1000);
        }
    return(
        <NoteState.Provider value={{state:state, update:update}}>
            {props.children} 
        </NoteState.Provider>
    )
}

    


export default  NoteContext;
