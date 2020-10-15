const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
    app.post('/sign-up',  (req, res) => {
        const user = new User(req.body);

        user
          .save().then((user) => {
              const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "90 days" });
              res.cookie('nToken', token, { maxAge: 9000000, httpOnly: true });
              res.redirect('/');
          })
    });

    app.get('/logout', (req, res) => {
        res.clearCookie('nToken');
        res.redirect('/');
    })
}