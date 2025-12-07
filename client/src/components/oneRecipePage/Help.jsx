import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Help = ({setHelpShown}) => {
  return (  
    <div className="flex items-center justify-center">
      <h3 className="bg-amber-50 w-fit m-auto px-5 py-1.5 lg:px-10 lg:py-2.5 rounded-xl lg:rounded-2xl font-bold text-xl lg:text-3xl text-center">Steps</h3>
      <FontAwesomeIcon 
      icon={faQuestionCircle} 
      className="text-amber-50 text-2xl cursor-pointer"
      onClick={() => setHelpShown(true)}
      />
    </div>
  );
}
 
export default Help;