import { useState } from "react";
import TimeTape from "./TimeTape";

const TimeModal = ({isOpen, setIsOpen, hours, minutes, setHours, setMinutes}) => {
  const [error, setError] = useState('');
  return (  
    <div className={`w-90 bg-amber-50 absolute rounded-2xl flex flex-col transition-all duration-150 ${isOpen ? 'scale-100' : 'scale-0'}`}>
      <h5 className="text-stone-800 text-center mt-4">Set Time</h5>
      <div className="flex justify-center items-center gap-5">
        <TimeTape till={12} text="Hours" left={true} away={false} setTime={setHours} time={hours}/>
        <TimeTape till={59} text="Minutes" left={false} away={true} setTime={setMinutes} time={minutes}/>
      </div>
      <span className="text-stone-800 text-center mt-5">{hours} hours {minutes} minutes</span>
      <span className="text-red-700 text-center font-bold mt-3">{error}</span>
      <button className="bg-pink-800 w-fit m-auto text-amber-50 px-8 py-2 text-xl rounded-2xl cursor-pointer my-4" onClick={() => {
        if (minutes == 0 && hours == 0){
          setError('Please set a time');
        } else {
          setIsOpen(o => !o);
          setError('');
        }
      }}>Ok</button>
    </div>
  );
}
 
export default TimeModal;