const UnitSelector = ({units, setU, setIsCustom}) => {
  return (  
    <select className="rounded-2xl bg-amber-50 outline-0 text-stone-950 font-bold px-2" 
      onChange={(e) => {
      setU(e.target.value);
      e.target.value === 'custom' ? setIsCustom(true) : setIsCustom(false);
    }} 
    >
      {units && units.map(u => (
        <option className="bg-sky-900 text-amber-50">{u.name}</option>
      ))}
    </select>
  );
}
 
export default UnitSelector;