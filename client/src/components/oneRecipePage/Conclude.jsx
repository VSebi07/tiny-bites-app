import UploadCta from "../ui/UploadCta";

const Conclude = () => {
  return (  
    <div className="lg:w-1/2 m-auto"> 
      <div className="flex flex-col text-amber-50 bg-teal-700 p-4 mt-5 rounded-2xl">
        <p className="text-sm">If you liked this recipe, take a photo of your meal and share on social <b>#tinybites</b></p>
        <h2 className="text-center text-md lg:text-xl lg:w-fit lg:m-auto lg:px-6 lg:py-2 mt-5 lg:mt-10 font-bold bg-amber-50 text-slate-800 rounded-2xl py-1.5">Enjoy your meal!</h2>
      </div>
      <UploadCta />
    </div>
  );
}
 
export default Conclude;