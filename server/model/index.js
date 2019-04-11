const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email must be filled.'],
        unique: true,
        validate: {
          validator: function(value) {
            return /^[^@]+@[^@].+[^@]/.test(value);
          },
          message: function() {
              `email is not valid!`
            }
        }
    },
  password: {
    type: String,
    required: [true, 'Password must be filled.'],
    minlength: [3, 'Password length must be higher than 3 characters']
  }
})

userSchema.pre('save', function(next){
  if(this.password) {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(this.password, salt)
    this.password = hash
  }
  next()
})

const User = mongoose.model('User', userSchema);

module.exports = User