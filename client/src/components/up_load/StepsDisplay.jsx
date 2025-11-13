import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const StepsDisplay = ({foodParts, steps, deleteItem, renameStep}) => {
  return (  
    <div className="flex gap-10">
      {foodParts && foodParts.map(f => (
        <div className="mt-10 max-w-100">
          <div className="flex justify-center items-center gap-1 mb-3">
            <h6 className="text-center text-2xl font-bold px-2 py-0.5">{f}</h6>
          </div>
          {steps.filter(i => i.category == f).map(i => (
            <div className="flex items-center">
            <p 
              className='text-md hover:bg-rose-700 px-2 py-0.5 rounded-md cursor-pointer transition-all duration-200'
              onClick={() => deleteItem(i)}>{i.text}
            </p>
            <FontAwesomeIcon 
              icon={faPen} 
              className="cursor-pointer hover:bg-sky-700 px-2 py-2 rounded-md transition-all duration-200 text-xl"
              onClick={() => renameStep(f)}
            />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
 
export default StepsDisplay;