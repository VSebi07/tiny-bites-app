import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SubmitBtn = ({addIngredient, errorNoInput, checkReqments}) => {
  return (  
    <div className="flex justify-center">
      <button 
        className={`${checkReqments() ? 'bg-pink-800 cursor-pointer' : 'bg-gray-700 cursor-no-drop'} px-16 py-4 text-xl rounded-2xl transition-all .3s`} 
        onClick={checkReqments() ? addIngredient : errorNoInput}>
        Add <FontAwesomeIcon icon={faPlus}/>
      </button>
    </div>
    
  );
}
 
export default SubmitBtn;