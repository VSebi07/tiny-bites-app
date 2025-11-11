const CtaSmall = ({text, styles, icon}) => {
  return (  
    <button className={`bg-pink-900 text-amber-50 p-4 cursor-pointer rounded-full flex gap-2 items-center md:text-lg px-6 justify-center md:w-80 w-70 m-auto md:m-0 ${styles ? styles : ''}` }>{icon}{text}</button>
  );
}
 
export default CtaSmall;