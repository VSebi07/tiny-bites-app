import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Loading = () => {
  const [infoShown, setInfoShown] = useState(false);
  return (  
    <div className="flex flex-col justify-center items-center p-4 h-screen gap-4">
      <div className="flex gap-2">
        <div className="bg-teal-600 w-7 h-7 rounded-full fa-bounce [--fa-animation-duration:1.5s]"></div>
        <div className="bg-teal-600 w-7 h-7 rounded-full fa-bounce [--fa-animation-delay:.25s] [--fa-animation-duration:1.5s]"></div>
        <div className="bg-teal-600 w-7 h-7 rounded-full fa-bounce [--fa-animation-delay:.5s] [--fa-animation-duration:1.5s]"></div>
      </div>
      <h4 className="text-amber-50 font-bold md:text-3xl text-xl">Stay still...</h4>
      <h5 className="text-amber-50 md:text-xl text-md text-center">Your favourite recipes are on their way</h5>
      <div className="flex text-amber-50 items-center gap-3 mt-10 cursor-pointer" onClick={() => setInfoShown(true)}>
        <FontAwesomeIcon icon={faQuestionCircle} className="text-2xl"/>
        <p>Why am I seeing this?</p>
      </div>
      <div className={`flex flex-col items-center mt-5 transition-all duration-200 ${infoShown ? 'scale-100' : 'scale-0'}`}>
        <div className="md:w-1/2 bg-teal-800 rounded-2xl p-3 flex flex-col gap-3">
           <p className="text-center text-amber-50 text-sm md:text-lg">TinyBites is gathering info about the recipes. It usually doesn't take more than one minute.</p>
           <button className="bg-amber-50 w-fit m-auto px-5 py-1 font-bold text-teal-800 rounded-2xl cursor-pointer md:text-xl text-lg" onClick={() => setInfoShown(false)}>Got it</button>
        </div>
      </div>
    </div>
  );
}
 
export default Loading;