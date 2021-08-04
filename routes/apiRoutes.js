const path = require('path')
const fs = require('fs')
const data = require('../db/db')
console.log(data)

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
      res.json(data);
    })
    app.post('/api/notes', (req,res) => {
      const newRawNote = { title: req.body.title, text: req.body.text, id: (data.length + 1) }
      data.push(newRawNote);
      fs.writeFile("./db/db.json", JSON.stringify(data), function (error, data) {
        if (error) throw error;
        console.log('successful')
      })
      res.json(data);
    })
    app.delete("/api/notes/:id", function (req, res) {
      let id = JSON.parse(req.params.id)
      let ary = []
      for(let i = 0; i < data.length; i++){
        if (data[i].id !== id){
          ary.push(data[i]);
        }
      }
      fs.writeFile("./db/db.json", JSON.stringify(ary), function (error, data) {
        if (error) throw error;
        console.log('successful')
      })
      res.json(ary)
    })
}