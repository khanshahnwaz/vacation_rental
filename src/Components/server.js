const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/homes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const houseSchema = new mongoose.Schema({}, { strict: false });
const House = mongoose.model('homes', houseSchema, 'vacation-homes');

// Routes
app.get('/api/houses', async (req, res) => {
  try {
    const houses = await House.find({});
    res.json(houses);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});