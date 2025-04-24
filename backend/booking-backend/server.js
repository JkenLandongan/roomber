const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Booking } = require('./models');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// POST: Create Booking
app.post('/bookings', async (req, res) => {
  try {
    const { name, roomName, date, time } = req.body;
    const booking = await Booking.create({ name, roomName, date, time });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking', details: error.message });
  }
});

// GET: Get All Bookings
app.get('/bookings', async (req, res) => {
  const bookings = await Booking.findAll();
  res.json(bookings);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
