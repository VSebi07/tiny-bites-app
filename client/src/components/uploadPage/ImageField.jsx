import UploadCloudLineIcon from "../svg/UploadCloudLineIcon";

const ImageField = ({handleClick, image, handleImageChange, inputRef}) => {
  return (  
    <div onClick={handleClick} className="md:w-140 md:h-140 sm:w-100 sm:h-100 h-full w-full flex shrink-0">
      {image ? <img className="object-cover rounded-2xl h-full min-w-full shrink-0 cursor-pointer" src={URL.createObjectURL(image)}></img>
        : 
        <div className="flex flex-col gap-2 justify-center items-center border-2 border-amber-50 rounded-2xl cursor-pointer h-full w-full">
          <UploadCloudLineIcon /> <h4 className="text-2xl">Upload or <span className="underline">Drop</span> an Image</h4>
        </div>}
      <input 
      className="hidden"
      type="file" 
      name="image"
      onChange={handleImageChange}
      ref={inputRef}
      accept="image/*"/>
  </div>
  );
}
 
export default ImageField;