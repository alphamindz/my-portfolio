const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  intro: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String],
  liveLink: String,
  githubLink: String,
  videoUrl: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);