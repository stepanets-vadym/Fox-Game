const mongoose = require('mongoose'),
  bcrypt = require('bcryptjs'),
  UserScheme = mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
  }),
  User = (module.exports = mongoose.model('users', UserScheme));

module.exports.addUser = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.comparePass = (passFromUser, userDBPass, callback) => {
  bcrypt.compare(passFromUser, userDBPass, (error, isMatch) => {
    if (error) throw error;
    callback(null, isMatch);
  });
};
