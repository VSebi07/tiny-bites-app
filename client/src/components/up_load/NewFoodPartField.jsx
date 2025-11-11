const NewFoodPartField = ({setCategory}) => {
  return (  
     <input 
      type="text" 
      placeholder='e.g. besamel'
      onChange={(e) => {setCategory(e.target.value)}}
      className="bg-pink-900 py-4 text-center outline-0 rounded-2xl px-3"
      />
  );
}
 
export default NewFoodPartField;