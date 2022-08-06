const express = require('express'),
  router = express.Router(),
  Game = require('../../models/games');
Category = require('../../models/categorys');
mongoose = require('mongoose');
(config = require('../../config/db')),
  router.post('/addGames', async (req, res) => {
    try {
      // ! Get values from request
      const {
        shopimage,
        sliderGrandImage,
        sliderSmallImage,
        gamePageImage,
        title,
        sliderTitle,
        grandLogo,
        smallLogo,
        sliderLogo,
        category,
        genres,
        price,
        sliderDescription,
        gamePageDescription,
        videoLink,
        iframeVideo,
      } = req.body;
      let game;
      game = await Game.findOne({ title: title.toLowerCase() });

      if (game) {
        return res.status(400).json({
          message: 'Title shoul be unique',
        });
      }
      game = new Game({
        image: {
          shopimage,
          sliderGrandImage,
          sliderSmallImage,
          gamePageImage,
        },
        title: title.toLowerCase(),
        sliderTitle,
        logo: {
          grandLogo,
          smallLogo,
          sliderLogo,
        },
        category,
        genres,
        price,
        description: {
          sliderDescription,
          gamePageDescription,
        },
        videoLink,
        iframeVideo,
      });
      console.log(game);
      game.save((error, game) => {
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
    // TODO ЗРОБИТИ ПАГІНАЦІЮ
    const gameList = await Game.find();
    const updatedGameList = [];
    for (let index = 0; index < gameList.length; index++) {
      const categoryList = [];

      for (let i = 0; i < gameList[index].category.length; i++) {
        const id = gameList[index].category[i];
        const categoryDetail = await Category.findById(id);
        categoryList.push({
          id: categoryDetail._id,
          title: categoryDetail.title,
        });
      }
      updatedGameList.push({
        image: gameList[index].image,
        title: gameList[index].title,
        sliderTitle: gameList[index].sliderTitle,
        logo: gameList[index].logo,
        // category: gameList[index].category,
        category: categoryList,

        genres: gameList[index].genres,
        price: gameList[index].price,
        description: gameList[index].description,
        videoLink: gameList[index].videoLink,
        iframeVideo: gameList[index].iframeVideo,
        id: gameList[index]._id,
      });
    }
    return res.status(200).json(updatedGameList);
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

router.get('/:id', async (request, response) => {
  try {
    const id = request.params.id;

    let game = await Game.findById(id);
    if (!game) {
      return response.status(404).json({
        message: 'Game not Found',
      });
    }

    return response.status(200).json(game);
  } catch (error) {
    response.status(500).json({
      success: false,
      message: {
        ua: 'Виникли деякі проблеми',
        en: 'there were some problem',
      },
      error: error,
    });
  }
});

module.exports = router;
