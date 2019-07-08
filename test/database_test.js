//These tests require the following steps to run...
//1: Run mongod and mongo from the command line (Windows)
//2: From the terminal, use command __ npm run test __ 

const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const Schema = mongoose.Schema;


const testSchema = new Schema({
  name: { type: String, required: true }
});


const Name = mongoose.model('Name', testSchema);

describe('Database Tests', function() {
  //Before the tests run, establish a connection to the database
  before(function (done) {
    mongoose.connect('mongodb://localhost/testDatabase', { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to test database!');
      done();
    });
  });

  describe('Database Testing', function() {
    //Save object with 'name' value of 'Mike"
    it('It should save a name to the database', function(done) {
      var testName = Name({
        name: 'Mike'
      });
 
      testName.save(done);
    });
    it('It should not save data with incorrect keys', function(done) {
      //Checks to see if we can save data with different keys
      var wrongSave = Name({
        notName: 'Not Mike'
      });
      wrongSave.save(err => {
        if(err) { return done(); }
        throw new Error('Should generate error!');
      });
    });

    //Should not save any data with the same key/values 
    it('It should not save duplicate data', function(done) {
      var anotherTestName = Name({
        name: 'Mike'
      });

      Name.find({name: 'Mike'}).exec((err, result) => {
        if(err)  return err;
        if(result.length) return done();
        else anotherTestName.save(done);
      })
    });
    //if the result.length > 1, than we have saved duplicate data
    it('Checks to see if the database length is one', function(done) {
      Name.find({name: 'Mike'}).exec((err, result) => {
        if(err) return err;
        if(result.length === 1) return done();
        else throw new Error('Duplicate data has been Saved!')
    });
  });


    //should find the previously saved name
    it('It should retrieve data from the database', function(done) {

      Name.find({name: 'Mike'}, (err, name) => {
        if(err) {throw err;}
        if(name.length === 0) {throw new Error('No data!');}
        done();
      });
    });
  });

  //After tests run, drop database and close connection
  after(function(done){
    mongoose.connection.db.dropDatabase(function(){
      mongoose.connection.close(done);
    });
  });
});