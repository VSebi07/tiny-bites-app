const TimeTape = ({till, text, left, away}) => {
  return (  
    <>
      {left && <span className="text-stone-800">{text}</span>}
      
      <div className="flex flex-col gap-2 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-50 mt-5 items-center snap-y snap-mandatory">
        {
          Array.from({length: till}, (_, i) => i).map(e => (
          <span className={`text-stone-800 relative font-bold text-2xl cursor-pointer bg-gray-200 min-w-15 h-15 text-center rounded-full px-4 py-4 transition-all duration-150 hover:bg-violet-900 hover:text-amber-50 ${away ? 'top-[-119rem]': ''}`}>{e+1}</span>
        ))
        }
      </div>

      {!left && <span className="text-stone-800">{text}</span>}
    </>
    
  );
}
 
export default TimeTape;