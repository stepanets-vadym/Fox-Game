const mongoose = require('mongoose'),
  CategoryScheme = mongoose.Schema({
  
    title: {
      type: String,
      required: true,
    },
  }),
  Category = (module.exports = mongoose.model('categorys', CategoryScheme));
