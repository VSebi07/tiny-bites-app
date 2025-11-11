const Category = require('../models/Category');
const Recipe = require('../models/Recipe');
const mongoose = require('mongoose');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({updatedAt: -1});
    res.status(200).json(categories);
  } catch (e) {
    res.status(400).json({error: 'No categories :/'})
  }
}

const getRecipesByCategory = async (req, res) => {
  const catName = req.params.catName;
  try {
    const recipes = await Recipe.find({categories: catName});
    res.status(200).json(recipes);
  } catch (e) {
    res.status(400).json(e.message)
  }
}

const addCategory = async (req, res) => {
  try {
    const cat = await Category.create(req.body);
    res.status(200).json(cat);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

module.exports = {
  getAllCategories,
  getRecipesByCategory,
  addCategory
}