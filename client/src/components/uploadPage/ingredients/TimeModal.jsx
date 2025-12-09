import TimeTape from "./TimeTape";

const TimeModal = () => {
  return (  
    <div className="w-90 bg-amber-50 absolute rounded-2xl flex flex-col">
      <h5 className="text-stone-800 text-center mt-4">Set Time</h5>
      <div className="flex justify-center items-center gap-5">
        <TimeTape till={12} text="Hours" left={true} away={false}/>
        <TimeTape till={59} text="Minutes" left={false} away={true}/>
      </div>
      <button className="bg-violet-800 w-fit m-auto text-amber-50 px-8 py-2 text-xl rounded-2xl cursor-pointer my-4">Ok</button>
    </div>
  );
}
 
export default TimeModal;