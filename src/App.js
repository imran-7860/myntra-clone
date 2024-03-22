
import { useState } from "react";
import "./App.css";

import Main from "./components/Main";
// import Model from "./components/Model";


function App() {
  // const [openModel,setOpenModel] = useState(false)
  return (
    <div>
      <Main />
    {/* <button onClick={()=> setOpenModel(true)}>Model</button>
     <Model open={openModel}  onclose={()=> setOpenModel(false)} /> */}
    </div>
  );
}

export default App;
