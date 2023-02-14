const bcrypt = require('bcrypt');

const User = require('../models/User');

exports.createOneUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.loginOneUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        // compare -> userPass =? inPass controller
        if (same) {
          // userSession //
          req.session.userID = user._id;
          res.status(200).redirect('/');
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.logoutOneUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};
