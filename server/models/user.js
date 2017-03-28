const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  // v databaze bude len unikatne emaily
  //mongoDB je case sensitive, takze 3. vlastnost v konfiguracii nam zebezpeci,
  //ze sa vsetko zapise malymi pismenami
  password: String
});

//pred ulozenim vid. 'save', run this function, vid 'pre'
userSchema.pre('save', function(next) {
  //pristup k user model
  const user = this; // napr. user.email; user.password

  //generuj salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {return next(err); }

    //zahashuj helo saltom
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {return next(err); }

      //prepis nezahasovane heslo
      user.password = hash;
      //next = pokrac. a uloz model
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {return callback(err); }

    callback(null, isMatch);
  });
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
