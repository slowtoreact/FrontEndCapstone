const express = require('express');
const db = require('./database/db.js')
const bodyParser = require('body-parser');
const app = express();


app.use(express.static('./client/dist'))
app.use(bodyParser.json())
const port = 3000;

app.post('/', (req, res) => {
    db.save(req.body)
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

