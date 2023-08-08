const {MongoClient} = require('mongodb');
let dbConnection;

module.exports = {
  connectToDb:(cb)=>{
    MongoClient.connect("mongodb+srv://admin:admin@eshop.9j3mbzg.mongodb.net/ticari")
    .then((client)=>{
      dbConnection = client.db()
      return cb();
    })
    .catch(err=>{
      console.log(err);
      return cb(err)
    })
  },
  getdb:()=>{return dbConnection}
    
 
}