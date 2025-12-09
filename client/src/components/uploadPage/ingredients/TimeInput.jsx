import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import TimeModal from "./TimeModal";

const TimeInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleClock = () => {
    setIsOpen(o => !o);
  }

  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  return (  
    <>
      <FontAwesomeIcon icon={faClock} className="cursor-pointer text-4xl" onClick={() => toggleClock()}/>
      <TimeModal />
    </>
  );
}
 
export default TimeInput;