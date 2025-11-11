const CtaButton = ({text, styles, icon}) => {
  return (  
    <button className={`md:bg-gradient-to-r md:bg-[length:200%_100%] md:scale-100 transition-all duration-250 md:hover:bg-right hover:bg-bottom md:border-0 md:px-18 md:py-4 px-15 py-3 cursor-pointer rounded-3xl flex items-center gap-3 md:text-2xl text-lg text-amber-50 bg-pink-700 ${styles ? styles : ''}` }>{text}{icon}</button>
  );
}
 
export default CtaButton;