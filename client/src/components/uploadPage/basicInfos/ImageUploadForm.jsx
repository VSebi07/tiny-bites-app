import { useEffect, useState, useRef } from "react";
import { faAngleDoubleRight, faArrowRight, faBowlFood, faCircleArrowRight, faImages, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import UploadTitle from "../_universals/UploadTitle";
import BasicInfos from "./BasicInfo";
import ImageField from "./ImageField";
import NextStep from "../_universals/NextStep";
import SelectCategory from "./SelectCategory";

const ImageUploadForm = ({ db }) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(localStorage.getItem('name') || '');
  const [desc, setDesc] = useState(localStorage.getItem('desc') || '')
  const [categories, setCategories] = useState(JSON.parse(localStorage.getItem('categories')) || []);
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
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

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
    if (file) {
      setImage(file);
      await db.images.put({ name: 'profileImage', file });
    }
  };

  document.querySelector('title').textContent = 'Upload Recipe 1/3 | TinyBites';

  return (
    <div className="flex flex-col items-center p-3">
      <UploadTitle icons={[faBowlFood, faQuoteRight, faImages]} num={1} />
      <div className="md:w-3/4 w-full flex md:flex-row flex-col md:gap-10 items-center justify-center text-amber-50 mt-10">
        <BasicInfos setTitle={setTitle} setDesc={setDesc} title={title} desc={desc} categories={categories} setCategories={setCategories}/>
        <ImageField handleClick={handleClick} handleImageChange={handleImageChange} image={image} inputRef={inputRef} />
      </div>
      <NextStep to="/upload/ingredients" />
    </div>
  );
}

export default ImageUploadForm;