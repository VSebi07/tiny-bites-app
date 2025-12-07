import SVGIcon from "../svg/SVGIcon";

const BannerText = () => {
  return (  
    <div className="flex flex-col items-center"> 
      <h1 className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-700 lg:text-9xl text-5xl mt-3 select-none">TinyBites</h1>
      <h2 className="text-amber-50 text-center mt-4 select-none md:text-xl text-md">Share & Discover Culinary Delights</h2>
      <SVGIcon className="md:w-32 w-20 fill-amber-50 mt-10 m-auto"/>
    </div>
  );
}
 
export default BannerText;