require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await Message.create({ name, email, message });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: 'aazespf@gmail.com',
      to: 'aazespf@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `You received a message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (err) {
    console.error('Email send or DB save failed:', err);
    res.status(500).json({ success: false, error: 'Message could not be sent or saved' });
  }
});

module.exports = router;
