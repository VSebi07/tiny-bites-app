const express = require('express');
const router = express.Router();
const { addRecipe, showAllRecipes, showRecipe } = require('../controllers/recipeControllers.js');

router.get('/', showAllRecipes);
router.get('/:id', showRecipe);
router.post('/', addRecipe);

module.exports = router;