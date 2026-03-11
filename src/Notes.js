import { useState,useContext,useEffect } from "react";
import { NoteContext } from "./context";
import { db } from "./firebase";
import { ref, push, onValue, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Notes(){

 const {notes,setNotes} = useContext(NoteContext);
 const [text,setText] = useState("");
 const navigate = useNavigate();

 useEffect(()=>{

  const notesRef = ref(db,"notes");

  onValue(notesRef,(snapshot)=>{

   const data = snapshot.val();

   if(data){
    const list = Object.keys(data).map((key)=>({
     id:key,
     ...data[key]
    }));

    setNotes(list);
   } else {
    setNotes([]);
   }

  });

 },[]);

 function addNote(e){

  e.preventDefault();

  if(text==="") return;

  const notesRef = ref(db,"notes");

  push(notesRef,{
   text:text
  });

  setText("");
 }

 function deleteNote(id){

  const noteRef = ref(db,"notes/"+id);

  remove(noteRef);
 }

 function logout(){
  navigate("/");
 }

 return(
 <div className="container">

  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
   <h2>My Notes</h2>
   <button onClick={logout}>Logout</button>
  </div>

  <form onSubmit={addNote}>

   <input
    value={text}
    onChange={(e)=>setText(e.target.value)}
    placeholder="write note"
   />

   <button>Add</button>

  </form>

  {notes.map((n)=>(
   <div key={n.id} className="note">

    <p>{n.text}</p>

    <button
     className="delete-btn"
     onClick={()=>deleteNote(n.id)}
    >
     delete
    </button>

   </div>
  ))}

 </div>
 )
}

export default Notes;