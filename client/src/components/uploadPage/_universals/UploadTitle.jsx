import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UploadTitle = ({num, icons}) => {
  return (  
    <div className="flex justify-center gap-4 items-center md:mt-5 flex-wrap flex-col md:flex-row">
      <span className="md:text-3xl text-xl font-bold bg-amber-50 text-slate-800 md:min-w-12 md:h-12 min-w-10 h-10 flex justify-center items-center rounded-full">{num}.</span>
      <div className="text-amber-50 text-3xl md:text-4xl flex gap-3">
        {icons.map(ic => (
          <FontAwesomeIcon icon={ic} />
        ))}
      </div>
    </div>
  );
}
 
export default UploadTitle;