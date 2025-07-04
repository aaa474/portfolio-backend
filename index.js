const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const contactRoute = require('./routes/contact');

const messageRoutes = require('./routes/messages');
app.use('/api/messages', messageRoutes);


app.use(cors());
app.use(express.json());


app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use('/api/contact', contactRoute);

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  dbName: 'portfolioDB',
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));
