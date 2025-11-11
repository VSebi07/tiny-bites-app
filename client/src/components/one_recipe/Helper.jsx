import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import TapSvg from "../svg/TapSvg";

const Helper = ({helpShown, setHelpShown}) => {
  return (  
    <div className={`bg-violet-800 mt-5 rounded-2xl relative overflow-hidden ${helpShown ? 'p-4' : 'h-0 p-0'}`}>
      <FontAwesomeIcon 
      icon={faXmark} 
      className="absolute right-2 top-2 text-amber-50 cursor-pointer"
      onClick={() => {
        setHelpShown(false);
        localStorage.setItem('helpShown', false);
      }}
      />
      <h6 className="text-slate-800 bg-amber-50 w-fit m-auto px-4 py-1.5 rounded-xl font-bold text-sm lg:text-xl text-center mb-5">How to use the StepFocus</h6>

      <div className="flex gap-2 mb-2 items-center">
        <TapSvg cls="fill-amber-50 size-5 lg:size-8"/> 
        <span className="text-amber-50 text-xs lg:text-lg">Tap on a step to highlight it</span>
      </div>
      <div className="flex gap-2 mb-2 items-center">
        <TapSvg cls="fill-amber-50 size-5 lg:size-8"/> 
        <span className="text-amber-50 text-sm lg:text-lg">2x</span>
        <span className="text-amber-50 text-xs lg:text-lg">Tap twice to mark as done</span>
      </div>
      <div className="flex gap-2 items-center">
        <TapSvg cls="fill-amber-50 size-5 lg:size-8"/> 
        <FontAwesomeIcon icon={faCheckCircle} className="text-amber-50"/>
        <span className="text-amber-50 text-xs lg:text-lg">Tap on a done step to show it</span>
      </div>
    </div>
  );
}
 
export default Helper;