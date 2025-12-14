import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const TimeTape = ({till, text, left, setTime, time}) => {

  useEffect(() => {
    console.log(time);
    
  }, [time])
  return (  
    <>
      {left && <span className="text-stone-800">{text}</span>}
      
      <div className="flex flex-col gap-2 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-50 mt-5 items-center snap-y snap-mandatory">
        <FontAwesomeIcon 
        icon={faBan} 
        className="text-stone-800 font-bold text-2xl cursor-pointer bg-gray-200 max-w-15 h-15 text-center rounded-full px-4 py-4"
        onClick={() => setTime(0)}/>
        {
          Array.from({length: till}, (_, i) => i).map(e => (
          <span className={`relative font-bold text-2xl cursor-pointer min-w-15 h-15 text-center rounded-full px-4 py-4 transition-all duration-150 hover:bg-pink-800 hover:text-amber-50 ${time == e+1 ? 'bg-pink-900 text-amber-50' : 'bg-gray-200 text-stone-800'}`}
          onClick={() => setTime(e+1)}>{e+1}</span>
        ))
        }
      </div>

      {!left && <span className="text-stone-800">{text}</span>}
    </>
    
  );
}
 
export default TimeTape;