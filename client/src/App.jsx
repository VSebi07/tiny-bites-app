import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecipesProvider } from "./contexts/RecipeContext";

/* Component imports */
import Recipes from "./pages/Recipes";
import Home from "./pages/Home";
import UploadRecipe from "./pages/UploadRecipeOne"
import AllRecipes from "./pages/AllRecipes";
import Categories from "./pages/Categories";
import ScrollToTop from "./components/ui/ScrollToTop";
import Nav from "./components/ui/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FilterProvider } from "./contexts/SelectedPlusIngsContext";
import OneRecipe from "./pages/OneRecipe";
import { AnimatePresence } from "framer-motion";
import UploadRecipeTwo from "./pages/UploadRecipeTwo";
import NotFound from "./pages/404";
import { CategoryProvider } from "./contexts/CategoryContext";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      <RecipesProvider>
        <BrowserRouter>
        <Nav style={showNav ? 'left-0' : 'left-[-20rem]'}/>
        <FontAwesomeIcon className="text-amber-50 text-2xl md:text-4xl cursor-pointer p-5 absolute z-20" icon={faBars} onClick={() => setShowNav(true)}/>
        <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={
                <CategoryProvider>
                  <Recipes/>
                </CategoryProvider>
                } />
              <Route path="/upload/basics" element={<UploadRecipe />} />
              <Route path="/upload/ingredients" element={<UploadRecipeTwo />} />
              <Route path="/recipes/all" element={
                <FilterProvider>
                  <AllRecipes />
                </FilterProvider>
                } />
              <Route path="/recipes/categories" element={<Categories />} />
              <Route path="/recipes/:name" element={<OneRecipe />}/>
              {/* <Route path="/404" element={<NotFound />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence> 
        </BrowserRouter>
      </RecipesProvider>
    </div>
  );
}

export default App;
