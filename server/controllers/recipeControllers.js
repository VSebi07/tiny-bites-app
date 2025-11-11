const Recipe = require('../models/Recipe');
const mongoose = require('mongoose');

const addRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(...[req.body]);
    res.status(200).json(recipe);
  } catch (e) {
    res.status(400).json({error: e.message})
  }
}

const showAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({createdAt: -1});
    res.status(200).json(recipes);
  } catch (e) {
    res.status(400).json({error: 'No Recipes to display!'})
  }
}

const showRecipe = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.isValidObjectId(id)) res.status(404).json({error: 'This recipe could not be found.'});
  const recipe = await Recipe.findById(id);
  
  if (!recipe) res.status(404).json({error: 'This recipe could not be found.'})
  res.status(200).json(recipe);    
}

module.exports = {
  addRecipe,
  showAllRecipes,
  showRecipe
}