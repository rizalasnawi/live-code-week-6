const User = require('../model/index');

module.exports = {
  authorize({ params, decoded }, res, next) {
    User
      .findById(params.id)
      .then(users => {
        if(decoded.id == String(users._id)) {
          next()
        } else {
          res.status(401).json({
            warning: 'You have no authorize to access this data!'
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          msg: err
        })
      })
    }
}