// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const fs = require('fs')
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});



// const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const {v4 : uuidv4} = require('uuid');
// const app = express();
// const PORT = process.env.PORT || 8080;
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'));
// const noteData = fs.readFileSync('./database/db.json')
// console.log(JSON.parse(noteData))

// app.get('/api/notes', (req, res) => {
//   return JSON.parse(noteData);
// });
// app.post('/api/notes', (req, res) => {
//   const savedNote = req.body;
//   savedNote.id = uuidv4();
//   console.log(savedNote)
//   let db = JSON.parse(fs.readFileSync("./database/db.json", "utf8"))
//   console.log(db)
//   db.push(savedNote)
//   fs.writeFileSync("/database/db.json", JSON.stringify(db))

//   res.json(data)
// }
// )

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, './notes.html'));
//   });

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './index.html'));
//   });

 
   
//   app.listen(PORT, () => {
//     console.log(`App listening on PORT: ${PORT}`);
//   })