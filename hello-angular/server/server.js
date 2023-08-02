const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist/hello-angular')));

// Route all requests to the Angular application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/hello-angular/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
