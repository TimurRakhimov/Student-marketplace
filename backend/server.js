const express = require('express');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes'); // Adjust path as necessary

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', itemRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
