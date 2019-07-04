const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testDB', {useNewUrlParser: true});

let db = mongoose.connection

db.once('open', () => {
    console.log('you made a database connection')
}).on('error', (error) => {
    console.log(error);
})

let citySchema = new mongoose.Schema({
    name: String,
    description: String
});

let Cities = mongoose.model('Cities', citySchema);



let save = (city, callback) => {
    

  Cities.find({name: city.name}).exec((err, result) => {
          if(err) return err;
          if (result.length) return;
      
          let newCity = new Cities ({
            name: city.name,
            description: city.description
          }).save(err => {
            if (err) console.log(err)
          })
        })
}

module.exports.save = save;