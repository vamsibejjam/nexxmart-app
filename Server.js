const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const Products = require('./src/Product');

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  try {
    const products = await Products.find(); 
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
