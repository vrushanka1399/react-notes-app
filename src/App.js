import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Login";
import Notes from "./Notes";
import NoteProvider from "./context";

function App(){

 return(
  <NoteProvider>

  <BrowserRouter>

   <Routes>
     <Route path="/" element={<Login/>}/>
     <Route path="/notes" element={<Notes/>}/>
   </Routes>

  </BrowserRouter>

  </NoteProvider>
 )
}

export default App;
