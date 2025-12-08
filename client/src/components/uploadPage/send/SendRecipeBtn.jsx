import Dexie from "dexie";
import { useEffect, useState } from "react";

const SendRecipeBtn = () => {

  const [image, setImage] = useState(null);

  const db = new Dexie('image');
  db.version(1).stores({
    images: 'name, file'
  });

  useEffect(() => {
    const loadImage = async () => {
      const saved = await db.images.get('profileImage');
      if (saved) {
        setImage(saved.file);       
      } else {
        console.log('no image saved');
      }
    };
    loadImage();
  }, []);

  const trySending = () => {

    const name = localStorage.getItem('name');
    const desc = localStorage.getItem('desc');
    const servings = localStorage.getItem('servings');

    const foodParts = JSON.parse(localStorage.getItem('foodParts'));
    const ingredients = JSON.parse(localStorage.getItem('ingredients'));
    const steps = JSON.parse(localStorage.getItem('steps'));

    console.log(steps);
    

    fetch(`${import.meta.env.VITE_API_URL}/api/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        desc,
        foodParts,
        ingredients,
        steps,
        image: null,
        servings,
        categories: ['italy', 'vegetables'],   //! átírni
      })
    })
    .then(res => res.json())
    .then(recipe => {
      console.log(recipe);
      
      if (!recipe.error){

        const formData = new FormData();
        formData.append('image', image);
        
        fetch(`${import.meta.env.VITE_API_URL}/api/upload`, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(path => {
          console.log(path);
          
          recipe.image = path.imageUrl;

          fetch(`${import.meta.env.VITE_API_URL}/api/recipes/${recipe._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(recipe)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));

        })
        .catch(err => console.error(err));
      }

    })
    .catch(err => console.error(err));
  }

  return (  
    <div>
      <button onClick={() => trySending()}>Upload Recipe</button>
    </div>
  );
}
 
export default SendRecipeBtn;