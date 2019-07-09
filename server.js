const express = require('express');
const db = require('./database/db.js')
const bodyParser = require('body-parser');
const app = express();
const dataGenerator = require('./database/seeder.js')

app.use(express.static('./client/dist'))
app.use(bodyParser.json())
const port = 3000;

app.post('/', (req, res) => {
    let data = dataGenerator.dataGenerator();
    console.log(data)
    db.save(req.body)
    res.send(console.log('posted to Zagat database'))
})

app.get('/', (req, res) => {
  let data = dataGenerator.dataGenerator();
  console.log(data)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

