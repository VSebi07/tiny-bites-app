const express = require('express');
const router = express.Router();

const { getAllCategories, getRecipesByCategory, addCategory } = require('../controllers/categoryControllers');

router.get('/', getAllCategories);
router.get('/:catName', getRecipesByCategory);
router.post('/', addCategory)

module.exports = router;