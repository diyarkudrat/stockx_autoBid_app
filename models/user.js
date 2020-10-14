const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    next();
});

module.exports = mongoose.model("User", UserSchema);