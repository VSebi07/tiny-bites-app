import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import TimeModal from "./TimeModal";

const TimeInput = ({minutes, setMinutes, hours, setHours}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleClock = () => {
    setIsOpen(o => !o);
  }

  return (  
    <div className="flex items-center gap-3">
      <FontAwesomeIcon icon={faClock} className="cursor-pointer text-4xl" onClick={() => toggleClock()}/>
      <TimeModal isOpen={isOpen} setIsOpen={setIsOpen} hours={hours} minutes={minutes} setHours={setHours} setMinutes={setMinutes}/>
      <span>{hours} hours and {minutes} minutes</span>
    </div>
  );
}
 
export default TimeInput;