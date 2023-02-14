const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true, //notSpacing//
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model('Course', CourseSchema); //converToModel//

module.exports = Course;
