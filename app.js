const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({ 
    origin: '*', 
    methods: ['GET','POST'],
}));




// // Route for Login Page
app.get('/', (req, res) => {
  res.render('index');
});

// // Route for Login Page
app.get('/disclaimer', (req, res) => {
  res.render('disclaimer');
});


// Route to download the APK file
app.get('/download/apk', (req, res) => {
  const filePath = path.join(__dirname,'public', 'apk', 'indusapp.apk');
  res.download(filePath, 'indusapp.apk', (err) => {
      if (err) {
          console.error("Error downloading the file:", err);
          res.status(500).send('Could not download the file.');
      }
  });
});




app.get('*', (req, res) => {
    res.render('index');
  });
  






app.listen(3000, () => {
    console.log('Server running on port 3000');
});