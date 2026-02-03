const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');
const auth = require('../middleware/auth');

// Get all certificates
router.get('/', async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ date: -1 });
    res.json(certificates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create certificate (Admin)
router.post('/', auth, async (req, res) => {
  try {
    const certificate = new Certificate(req.body);
    const newCertificate = await certificate.save();
    res.status(201).json(newCertificate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete certificate (Admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Certificate.findByIdAndDelete(req.params.id);
    res.json({ message: 'Certificate deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;