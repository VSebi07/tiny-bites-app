const CustomUnit = ({setU}) => {
  return (  
    <input 
      type="text" 
      placeholder="Custom Unit Name"
      onChange={(e) => {
        setU(e.target.value);
      }} 
      className="bg-pink-900 py-4 rounded-2xl text-center outline-0 text-lg"
    />
  );
}
 
export default CustomUnit;