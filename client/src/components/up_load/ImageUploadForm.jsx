import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faArrowRight, faBowlFood, faCircleArrowRight, faImages, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import ErrorContainer from "./ErrorContainer";
import UploadCloudLineIcon from "../svg/UploadCloudLineIcon";
import { Link } from "react-router-dom";
import UploadTitle from "./UploadTitle";
import BasicInfos from "./BasicInfo";
import ImageField from "./ImageField";
import NextStep from "./NextStep";

const ImageUploadForm = ({db}) => { 
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(localStorage.getItem('name') || '');
  const [desc, setDesc] = useState(localStorage.getItem('desc') || '')
  const [errors, setErrors] = useState([]);

  const inputRef = useRef(null);

  const handleClick = (e) => {
    inputRef.current.click();
  }

  useEffect(() => {
    localStorage.setItem('name', title);
  }, [title]);

  useEffect(() => {
    localStorage.setItem('desc', desc);
  }, [desc]);

  useEffect(() => {
    const loadImage = async () => {
      const saved = await db.images.get('profileImage');
      if (saved) {
        setImage(saved.file);       
      }
    };
    loadImage();
  }, []);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file){
      setImage(file);
      await db.images.put({ name: 'profileImage', file });
    }
  };

  document.querySelector('title').textContent = 'Upload Recipe 1/3 | TinyBites';

  /*const handleSubmit = async () => {
    if (!imageFile) return;

    const formData = new FormData();
    formData.append('image', imageFile);

    await fetch('/upload', {
      method: 'POST',
      body: formData
    });

    await db.images.delete('profileImage');  // Optional: clear from IndexedDB after upload
  };*/


  return (  
    <div className="flex flex-col items-center p-3">
      <UploadTitle icons={[faBowlFood, faQuoteRight, faImages]} num={1}/>
      <div className="md:w-3/4 w-full flex md:flex-row flex-col md:gap-10 items-center justify-center text-amber-50 mt-10">
        <BasicInfos setTitle={setTitle} setDesc={setDesc} title={title} desc={desc} />
        <ImageField handleClick={handleClick} handleImageChange={handleImageChange} image={image} inputRef={inputRef} />
      </div>
      <NextStep to="/upload/ingredients" />
    </div>
  );
}

export default ImageUploadForm;