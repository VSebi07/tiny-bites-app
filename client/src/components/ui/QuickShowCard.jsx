const QuickShowCard = ({name, desc, author, image}) => {
  return (  
    <div className="bg-slate-800 p-5 flex flex-col md:flex-row md:gap-5 cursor-pointer transition-all duration-300 hover:scale-105 rounded-2xl relative">
      <img className="w-60 rounded-2xl object-cover m-auto h-40" src={`${import.meta.env.VITE_API_URL}/uploads/${image}`} alt={name} />
      <div className="md:flex md:flex-col md:items-center md:justify-center md:flex-1">
        <h5 className="text-center md:text-2xl text-xl mt-5 md:mt-0 underline mb-5">{name}</h5>
        <p className="md:text-xl mb-1 text-center">{desc}</p>
      </div>
      
    </div>
  );
}
 
export default QuickShowCard;