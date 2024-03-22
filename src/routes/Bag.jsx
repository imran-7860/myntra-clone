import React, { useState } from "react";

// import PopUp from "../components/PopUp";
import PopUpOne from "../components/PopUpOne";

const Bag = () => {
  const [openModel,setOpenModel] =useState(false)
  return (
    <div>
   <div className="flex justify-center items-center"> <button onClick={()=>setOpenModel(true)} className="text-4xl mt-10 mb-10 bg-violet-600 p-2">Model</button></div>
    {/* {openModel &&  <PopUp onClose={()=>setOpenModel(false)}/> } */}

   {openModel && <PopUpOne onClose={()=>setOpenModel(false)}/>}
    </div>
  );
};
export default Bag;
