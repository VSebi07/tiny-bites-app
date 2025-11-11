import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const ServingSetter = ({currentServings, setCurrentServings}) => {
  return (  
    <div className="flex justify-center items-center text-amber-50 gap-3 text-3xl lg:text-4xl w-full lg:mt-0 mt-10">
      <FontAwesomeIcon
        icon={faCircleMinus}
        className={`${currentServings === 1 ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={() => {
          if (currentServings > 1) setCurrentServings(s => s - 1);
        }} />
      <span className="select-none font-bold">{currentServings}</span>
      <FontAwesomeIcon
        icon={faCirclePlus}
        className="cursor-pointer"
        onClick={() => setCurrentServings(s => s + 1)} />
    </div>
  );
}
 
export default ServingSetter;