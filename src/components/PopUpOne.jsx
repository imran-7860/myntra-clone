import React , {useRef} from "react";
import { X } from "lucide-react";

const PopUpOne = ({ onClose }) => {
  const modelref = useRef();

  const closemodel = (e) => {
    if (modelref.current === e.target) {
      onClose();
    }
  };
  return (
    <div ref={modelref} onClick={closemodel} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 flex flex-row  shadow-lg">
        <div className="bg-violet-950 h-80 p-2">
          <div className="mt-4 text-3xl mb-3 text-white">SPRING SALE</div>
          <span className="text-green-500 ml-4 ">___________________</span>
          <div className="mt-10 mb-5 ml-14 text-4xl text-white">
            40% <br />
            OFF
          </div>
          <span className="text-green-500 ml-4">___________________</span>
        </div>

        <div className="h-80 bg-white p-10">
          <div className="text-black text-center ">
            ENTER EMAIL BELOW TO UNLOCK
          </div>

          <input
            type="text"
            placeholder="enter email address"
            className="outline-none text-xl mt-5 mb-5 border p-2 w-96 placeholder:text-gray-600"
          />
          <div className="mt-2 mb-3">
            <input type="checkbox" />
            <label className="ml-2 text-gray-500">
              Yes, I'd like to receive news and special offers
            </label>
          </div>
          <div>
            <button className="bg-green-600 w-96 mt-2 mb-2 text-xl text-white p-2">
              GET MY 40% OFF
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="text-gray-400 mt-3 ">NO THANKS</button>
          </div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="place-self-auto bg-white text-gray-500 rounded-full ml-2 mb-[245px]"
      >
        <X size={35} />
      </button>
    </div>
  );
};

export default PopUpOne;
