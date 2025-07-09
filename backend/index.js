const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Import routes
const newsletterRoutes = require('./routes/newsletter');
app.use('/newsletter', newsletterRoutes); 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
