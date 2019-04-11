const User = require('../model/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;


class UserController {

    static register (req, res) {
        User
        .create ({
              email : req.body.email,
              password : req.body.password
          })
        .then((users) => {
            res.status(201).json(users)
        })
        .catch((err) => {
            res.status(500).json({err : err})
        })
    }

    static login (req, res) {
        User
        .findOne ({
            'email': req.body.email
          })
        .then((users) => {
            if(!users) {
              res.status(400).json({
                warning: 'email/password is wrong.'
              })
            } else {
              if(!bcrypt.compareSync(body.password, users.password)) {
                res.status(400).json({
                  warning: 'email/password is wrong.'
                })
              } else {
                const {_id, email, password } = users
                const token = jwt.sign({ 
                  id: _id, email, password
                }, JWT_SECRET);
                console.log('===============')
                res.status(200).json({ email, password, token })
              }
            }
          })
        .catch((err) => {
            res.status(500).json(err)
        })
    }
}

module.exports = UserController