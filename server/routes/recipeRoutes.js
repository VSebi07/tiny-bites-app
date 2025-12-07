const express = require('express');
const router = express.Router();
const { addRecipe, showAllRecipes, showRecipe, updateRecipe } = require('../controllers/recipeControllers.js');

router.get('/', showAllRecipes);
router.get('/:id', showRecipe);
router.post('/', addRecipe);
router.patch('/:id', updateRecipe)

module.exports = router;