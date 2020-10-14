const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    createdAt: { type: Date },
    updatedAt: { type: Date },
    firstName: { type: String, required: true },
    lastName: { type: String, requried: true },
    username: { type: String, required: true },
    password: { type: String, select: false },
});

UserSchema.pre("save", function(next) {
    const now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    
    // Password Encryption
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(24, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(password, done) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        done(err, isMatch);
    });
};

module.exports = mongoose.model("User", UserSchema);