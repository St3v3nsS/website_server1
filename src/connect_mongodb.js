var MongoClient = require('mongodb').MongoClient
var url = "mongodb://mongo:27017/"; // the url
var _db;    // db

const collection = "users";
const dbName = "uefaDB";

module.exports = {
    connectToServer: function (callback) {  // connect to the server
        
        if(_db){
            return callback(null);  // if the db already exists, redirect to it
        }
        MongoClient.connect(url+dbName, {useNewUrlParser: true,  poolSize: 100}, function (err, db) {   // else, connect to it
            _db = db; 
            // get the db
            if(err){
                console.log('Connection failed!');
                return callback(err);
            }
            
            console.log("Success!");
            _db.db(dbName).collections((err, arr)=>{   // check if the 'users' collection already exists
                if(err){
                    return callback(err);
                }
                var count = 0;
                arr.forEach((elem, index)=>{
                    if(elem.collectionName == collection){
                        count++;
                    }
                });
                
                if(count == 0){ // if no, create it
                    _db.db(dbName).createCollection(collection, function (err) {
                        if(err){
                            console.log("Create failed!");
                            return callback(err);
                        }
                        
                        console.log("Collection Created!");
                    });
                    _db.db(dbName).collection(collection).createIndex( { username: 1, email: 1}, { unique: true } );
                }

                
               
            });

          
            return callback(null);
            
         });        
    },

    getDb: function () {// get the connection
        return _db;
    },

    closeDb: function () {
        _db.close();  
    }
}


