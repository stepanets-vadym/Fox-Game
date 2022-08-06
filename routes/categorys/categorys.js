const express = require('express'),
  router = express.Router(),
  Category = require('../../models/categorys');
(config = require('../../config/db')),
  // mongoose = require('mongoose');

  router.post('/addCategory', async (req, res) => {
    try {
      // ! Get values from request
      const { title } = req.body;
      let category;
      category = await Category.findOne({ title: title });

      if (category) {
        return res.status(400).json({
          message: 'Title shoul be unique',
        });
      }
      category = new Category({
        title,
      });
      category.save((error, category) => {
        if (error) {
          console.log(error);
          res.status(422).json({
            message: 'some error',
            error,
          });
        } else {
          res.status(201).json({
            message: 'success',
          });
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: {
          ua: 'Виникли деякі проблеми',
          en: 'there were some problem',
        },
        error: error,
      });
      console.log(error);
    }
  });

router.get('/getAll', async (req, res) => {
  try {
    // ! Get values from request

    const categoryList = await Category.find();
    const updateCategoryList = categoryList.map((category) => {
      return {
        title: category.title,
        id: category._id,
      };
    });
    return res.json(updateCategoryList);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: {
        ua: 'Виникли деякі проблеми',
        en: 'there were some problem',
      },
      error: error,
    });
    console.log(error);
  }
});

module.exports = router;
