import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const StepInput = ({addStep, currentFoodPart}) => {
  const [text, setText] = useState('');
  return (  
    <div className="p-4 flex gap-3 items-center">
      <input 
      type="text" 
      placeholder="Enter Instruction" 
      className="bg-pink-900 outline-0 p-4 rounded-2xl w-100"
      onChange={(e) => setText(e.target.value)}
      value={text}
      />
      <FontAwesomeIcon 
      icon={faCheck} 
      className={`text-3xl transition-all duration-150 ${text ? 'bg-transparent cursor-pointer' : 'text-gray-800 cursor-not-allowed'}`}
      onClick={() => {
        console.log(text);
        if (text){
          addStep({
            text: text,
            category: currentFoodPart
          });
          setText('');
        }
      }}/>
    </div>
  );
}
 
export default StepInput;