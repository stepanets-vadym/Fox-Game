const express = require('express'),
  router = express.Router(),
  User = require('../../models/users'),
  jwt = require('jsonwebtoken');
(config = require('../../config/db')),
  // mongoose = require('mongoose');

  router.post('/registration', async (req, res) => {
    try {
      // ! Get values from request
      const { firstName, username, lastName, password, email } = req.body;
      let user;

      user = await User.findOne({ email: email.toLowerCase() });

      if (user) {
        return res.status(400).json({
          message: 'Email shoul be unique',
        });
      }

      if (password.lenght < 8) {
        return response.status(417).json({
          message: 'Password shoul be more than 8 symbols',
        });
      }

      user = new User({
        firstName,
        lastName,
        username,
        email: email.toLowerCase(),
        password,
        active: true,
      });
      User.addUser(user, (error, user) => {
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
    }
  });

router.post('/authorization', async (request, response) => {
  try {
    const { email, password } = request.body;
    // Check that user is present in DB
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return response.status(400).json({
        message: 'There is no user with this email',
      });
    }

    if (!user.active) {
      return response.status(403).json({
        message: 'User is blocked',
      });
    }

    User.comparePass(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 3600 * 24 * 365,
        });
        response.status(200).json({
          token,
          user: {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
          },
        });
      } else {
        response.status(400).jsonp({
          message: 'incorrect password',
        });
      }
    });
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

router.get('/:id', async (request, response) => {
  try {
    const authorization = request.headers.authorization;
    const id = request.params.id;
    if (!authorization) {
      return response.status(401).jsom({
        message: 'User is not authorization',
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(404).json({
        message: 'User not found',
      });
    }
    let user;
    const verifyUser = jwt.verify(authorization, config.secret);

    if (!verifyUser) {
      return response.status(401).json({
        message: 'User is unauthorized',
      });
    } else if (id === verifyUser._id) {
      // Check verifyUser.role < 3 - super admin
      response.status(403).json({
        message: 'No acces',
      });
    }

    user = User.findById(id);
    if (!user) {
      return response.status(404).json({
        message: 'User not Found',
      });
    }

    if (!user.active) {
      return response.status(403).json({
        message: 'User is blocked',
      });
    }

    return response.status(200).json({
      user: {
        id: _id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        age: user.age,
        // Role
      },
    });
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

// User.findByIdAndUpdate(id, { nmae, age, ...this.allFromBody });
// findById = return all actual information from backend

// router.get('/list/:page', async (request, response) => {
//   const page = request.params.page || 1;

//   Article.find({ active: true }, null, { skip: (page - 1) * 10 })
//     .sort({ date: -1 })
//     .limit(10)
//     .exec((error, articles) => {
//       if (error) {
//         response.status(404).json({
//           success: false,
//           message: {
//             ua: 'Виникли деякі проблеми',
//             ru: 'Возникли некоторые проблемы',
//             en: 'There were some problems',
//           },
//         });
//       } else {
//         Article.countDocuments({ active: true }).exec((error, total) => {
//           if (error) {
//             throw error;
//           } else {
//             const totalPage = Math.ceil(total / 10);
//             console.log(articles);
//             response.status(200).json({
//               success: true,
//               result: {
//                 data: articles,
//                 total_page: totalPage,
//               },
//             });
//           }
//         });
//       }
//     });
// });

module.exports = router;
