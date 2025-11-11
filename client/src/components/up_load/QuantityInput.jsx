const QuantityInput = ({q, setQ}) => {
  return (  
    <input 
      type="number" 
      min="0" 
      placeholder="Quantity"
      onChange={(e) => setQ(e.target.value)}
      value={q}
      className="bg-pink-900 w-20 outline-0 py-4 text-center rounded-2xl text-md"
      />
  );
}
 
export default QuantityInput;