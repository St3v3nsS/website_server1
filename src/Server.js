const express = require('express');
const path = require('path');
const app = express();
const engine = require('ejs');
const bodyparser = require('body-parser');
const urlencoder = bodyparser.urlencoded({extended: true});
const dns = require('dns');
const session = require('express-session');
var connectMongo = require('./connect_mongodb');
var getDb = connectMongo.getDb;
var closeDb = connectMongo.closeDb;

const dbname = "uefaDB";
const collection = "users";

const options = {   // options for dns lookup
    family: 6,  
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

app.set('view engine', 'ejs');

app.use(express.static(__dirname));

app.use(urlencoder);

app.use(session({secret: "h234assdfg321asdic", resave: false, saveUninitialized: true}));

app.use(bodyparser.json());

connectMongo.connectToServer((err)=>{   // connect to mongodb server
    if(err){
        console.log(err);
    }
    
});

app.get('/', function(req, res){  //  Home Page

    res.sendFile(path.join(__dirname + '/index.html'));
   
});



app.get('/contact', function(req, res){ //  Contact Page
    res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/uefagame', function (req, res) {  //  UEFA GAME PAGE
   res.sendFile(path.join(__dirname + '/uefaGame.html')); 
});

app.post('/contact',function(req, res){ // contact form
    console.log(req.body);
    var email = req.body.email; // get the email
    var message = req.body.message; // and the message
    //res.status(200).send("Contact form");
    res.render('contact_form', {qs: {email, message}}); // render the contact post page
});

app.post('/signup', function(req, res){ // Handle the sign up form
    var uname = req.body.uname; //  Get the username
    var psw = req.body.psw; //  Get the password
    var Fullemail = req.body.email; // Get the email
    if(Fullemail){
        var newEmail = Fullemail.toLowerCase(); //  transforming email to lowerCase for matching
        console.log(newEmail);
        var email = newEmail.match('(?<=@)[a-zA-Z]+[\.][a-zA-Z]+'); // matching the domain
       
        if(email != null){
            
            
            dns.lookup(email[0], options, (err, address, family) =>{    //  Checking the email domain
                if(err){
                    
                    var qs = { uname, psw};
                    console.log(qs);
                    //res.status(400).send("no valid domain");
                    res.render('signup_error', {qs});   //  Render de error page
                }else{
                   // res.status(200).send("valid domain");
                    res.render('signup_form', {qs: {uname}});   // Render the Sign Up page
                    var db = getDb().db(dbname);   // connecting to DB
                    db.collection(collection).insertOne({username: uname, password: psw, email: Fullemail}, function (err, res) {  // Adding entry to DB
                        if(err){
                            console.log('cannot insert user');
                            return err;
                        }
                        console.log("SUCCESS");
                    });
                }
            });
            
        }
        else{
          //  res.status(400).send("No valid email");
            res.redirect('/');  // Redirect to home page in case of error
        }
      
    }
    
});

app.post('/login', (req, res)=>{    // login form 
    let username = req.body.uname;
    let password = req.body.psw;
    let querry = {username: username, password: password};
    console.log(querry);
    getDb().db(dbname).collection(collection).findOne(querry, (err, resp)=>{
        if(err || resp == null){
    
            //res.status(401).send("Auth error");
            res.render('login_error', {querry: {username}});
        }
        else{
            req.session.user = username;
            //res.status(200).send('Success');
            res.render('login_form', {querry: username});
           
        }
        
        //alert("WELCOME!");
    });
});

app.post('/logout', (req, res)=>{   
    console.log(req.session.user);//redirect to HomePage
    res.redirect('./index.html');  
});

process.on('uncaughtException', (err)=>{    // in case of error, stop the server
    console.log('Caught exception: ' + err);
    closeDb();   // but first close the connection
    process.exit(0);
});

process.on('SIGTERM', ()=>{ // on SIGTERM, stop the server
    closeDb();    // but first close the connection
    process.exit(1);
});

app.listen(8080);   // Start listening on port 8080