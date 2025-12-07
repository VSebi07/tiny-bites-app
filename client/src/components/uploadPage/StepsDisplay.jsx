import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import swap from "../../functions/swap";
import { useEffect, useState } from "react";

const StepsDisplay = ({foodParts, steps, deleteItem, setSteps}) => { 
  const changeStepOrder = (step1, step2) => {
    swap(steps.indexOf(step1), steps.indexOf(step2), setSteps)
  }

  const [selectedSteps, setSelectedStep] = useState([]);

  useEffect(() => {
    console.log(selectedSteps);
    
    if (selectedSteps.length === 2){
      if (selectedSteps[0].category === selectedSteps[1].category && selectedSteps[0] !== selectedSteps[1]){
        changeStepOrder(selectedSteps[0], selectedSteps[1]);
      }
      setSelectedStep([]);
    }
  }, [selectedSteps])

  return (  
    <div className="flex gap-10">
      {foodParts && foodParts.map(f => (
        <div className="mt-10 max-w-100 relative bg-violet-900 p-5 rounded-2xl text-amber-50">
          <div className="flex justify-center items-center gap-1 mb-3">
            <h6 className="text-center text-2xl font-bold">{f}</h6>
          </div>
          {steps && steps.filter(i => i && i.category == f).map((i, index) => (
            <div className={`flex items-center gap-3 mb-3 transition-all duration-150 rounded-2xl px-4 py-2 ${selectedSteps.includes(i) ? 'bg-violet-800' : ''}`}>
              <div className="flex items-center cursor-pointer" onClick={() => setSelectedStep(items => [...items, steps.filter(s => s && s.category === f)[index]])}>
                <span className="bg-amber-50 text-teal-900 w-10 h-10 flex justify-center items-center rounded-full font-bold text-xl">{index + 1}</span>
                <p className='text-lg px-2 py-0.5 '>{i.text}</p> 
              </div>
              <FontAwesomeIcon 
                icon={faTrashCan} 
                className="hover:text-rose-700 duration-200 cursor-pointer text-xl" 
                onClick={() => deleteItem(i)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
 
export default StepsDisplay;