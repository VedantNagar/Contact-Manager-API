const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Please enter name'],
  },
  email: {
    type: String,
    required: [true, 'Pls enter email'],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, 'Please enter phone number'],
    unique: true,
    min: 10,
    max: 10,
  },
});

module.exports = mongoose.model('contact', contactSchema);
