const IngResBtn = ({styles, text, icon}) => {
  return (  
    <p className={`${styles} text-center text-amber-50 w-fit md:px-6 px-4 md:py-2 py-1.5 md:rounded-3xl rounded-lg md:text-lg text-sm flex gap-2 items-center`}>{text}{icon}</p>
  );
}
 
export default IngResBtn;