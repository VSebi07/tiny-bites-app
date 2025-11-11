const BasicInfos = ({setTitle, setDesc, title, desc}) => {
  return (  
    <div className="w-10/12 md:w-1/4 flex flex-col gap-3 mb-10">
      <input 
        type="text" 
        placeholder="Recipe Name"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="bg-teal-700 rounded-2xl p-2 text-center outline-0 placeholder:text-amber-50/75 placeholder:font-medium md:text-xl"
      />
      <textarea 
        type="text"
        placeholder="Add a little description (optional)"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        className="outline-0 rounded-2xl h-30 p-3 bg-slate-800 placeholder:text-amber-50/40"
      />
    </div>
  );
}
 
export default BasicInfos;