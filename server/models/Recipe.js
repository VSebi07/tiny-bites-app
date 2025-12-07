const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name for your Recipe!'],
    unique: [true, 'A Recipe already exists with this name. Please give a different title for your Recipe.' ],
    validate: {
      validator: (v) => {
        return v.toLowerCase() !== 'all' && v.toLowerCase() !== 'categories';
      }
    }
  },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
        unique: [true, 'You have duplicate ingredients with the same name. Please select each ingredient only once.']
      },
      quantity: {
        type: Number,
        required: true,
        min: 0.1
      },
      unit: {
        type: String,
        required: true,
      },
      part: {
        name: {
          type: String,
          required: true
        },
        priority: {
          type: Number,
          min: 0,
          default: 0
        }
      }
    }
  ],
  servings: {
    type: Number,
    default: 4,
    min: 1
  },
  steps: {
    type: [Object],
    validate: {
      validator: (v) => {
        return Array.isArray(v) && v.length > 0;
      },
      message: 'Please provide at least one recipe step!'
    },
    required: true
  },
  author: {
    type: String,
  },
  authorImage: {
    type: String,
  },
  desc: {
    type: String,
    maxLength: 100
  },
  image: {
    type: String,
    // required: true
  },
  categories: {
    type: [String],
    validate: {
      validator: (v) => {
        return Array.isArray(v) && v.length > 0;
      },
      message: 'Please select at least one category!'
    },
    required: true
  },
  time: {
    qua: {
      type: Number,
      // required: true,
      min: 1
    },
    unit: {
      type: String,
      // required: true
    }
  },
  diff: {
    type: String,
    // required: true
  },
  likes: {
    type: Number,
    default: 0,
  }
}, { timestamps: true });

module.exports = mongoose.model('recipe', recipeSchema);