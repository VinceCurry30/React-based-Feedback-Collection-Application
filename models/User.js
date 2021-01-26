const mongoose = require('mongoose');
// const Schema = mongoose.Schema; equivalent to the next line
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// create a model class, load userSchema into mongoose, tell mongoose to create a new collection in MongoDB database
// first argument is the name of the collection, second argument is the schema
mongoose.model('users', userSchema);
