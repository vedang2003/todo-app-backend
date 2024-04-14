const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/todoroute');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.use(routes);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));