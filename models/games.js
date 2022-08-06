const mongoose = require('mongoose'),
  GameScheme = mongoose.Schema({
    image: {
      shopimage: {
        type: String,
        required: true,
      },
      sliderGrandImage: {
        type: String,
        required: false,
      },
      sliderSmallImage: {
        type: String,
        required: false,
      },
      gamePageImage: {
        type: String,
        required: true,
      },
    },
    type: Object,
    title: {
      type: String,
      required: true,
    },
    sliderTitle: {
      type: String,
      required: false,
    },
    logo: {
      grandLogo: {
        type: String,
        required: true,
      },
      sliderLogo: {
        type: String,
        required: false,
      },
      smallLogo: {
        type: String,
        required: false,
      },
    },
    category: {
      type: [String],
      default: [],
      required: false,
    },
    genres: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      sliderDescription: {
        type: String,
        required: false,
      },
      gamePageDescription: {
        type: String,
        required: true,
      },
    },

    videoLink: {
      type: String,
      required: true,
    },
    iframeVideo: {
      type: String,
      required: true,
    },
  }),
  Game = (module.exports = mongoose.model('games', GameScheme));
