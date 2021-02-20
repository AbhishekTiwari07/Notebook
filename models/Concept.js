const mongoose = require('mongoose');

const ConceptSchema = new mongoose.Schema({
  Title: {
    type: String,
    required:true
  },
  InstituteName: {
    type: String,
    required: true
  },
  CourseName: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  },
  examples:{
      type: String,
      required:false
  }
});

const Concept = mongoose.model('concept', ConceptSchema);

module.exports = Concept;