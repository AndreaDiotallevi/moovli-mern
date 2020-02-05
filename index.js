const express = require('express');
const path = require('path');

const app = express();

const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://moovli:moovli@moovli-qjsyq.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) return console.log(err)
  db = client.db('moovli')
  app.listen(5000, () => {
    console.log('listening on 5000')
  })
})

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
  const list = ['item1', 'item2', 'item3'];
  res.json(list);
  console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
