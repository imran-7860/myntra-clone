import React, { useRef } from "react";
import { X } from "lucide-react";
import { Download } from 'lucide-react';
const PopUp = ({onClose}) => {
  const modelref = useRef();

  const closemodel = (e)=>{
    if(modelref.current===e.target){
      onClose();
    }
  }
  return (
    <>
      

      <div ref={modelref} onClick={closemodel} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="mt-10 flex flex-col gap-5 text-white ">
          <button onClick={onClose} className="place-self-end"><X size={30} /></button>
          <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
            <h1 className="text-3xl font-extrabold">Download Free Books</h1>
            <p className="text-3xl font-bold max-w-md text-center">Yes, I'd like to receive news and special offers Yes, I'd like to receive news and special offers</p>
            <form >
              <input type="email" placeholder="enter your email" required className="w-full px-4 py-3 text-black border-gray-300 rounded-md"/>
              <button className="flex gap-2 mt-4 w-full items-center justify-center px-5 py-3 font-medium rounded-md bg-black"><Download />Download Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
