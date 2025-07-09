// controllers/newsletterController.js
const Subscriber = require('../models/Subscriber');
const nodemailer = require('nodemailer');

exports.subscribe = async (req, res) => {
  const { name, email } = req.body;

  try {
    // Save subscriber in DB
    const existing = await Subscriber.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Already subscribed' });

    const newSubscriber = new Subscriber({ name, email });
    await newSubscriber.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // e.g. yourclub@gmail.com
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thanks for Subscribing!`,
      text: `Hi ${name || 'there'},\n\nThanks for subscribing to our newsletter!\n\n— Your Club Team`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Subscription successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
