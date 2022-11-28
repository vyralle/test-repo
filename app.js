const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const cookieParser = require('cookie-parser');
const app = express();

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//const MongoClient = require('mongodb').MongoClient;

//const CONNECTION_URL = "mongodb+srv://abbyychia:test@abigail.rwnzu.mongodb.net/?retryWrites=true&w=majority";
//const DATABASE_NAME = "Abigail";
//const CONNECTION_URL = "mongodb+srv://itsmejaong:Study1ng@portfolio-app.zba91ak.mongodb.net/?retryWrites=true&w=majority";
//const DATABASE_NAME = "newdb";
//var database, collection;

app.set("view engine", "ejs");

app.use(cookieParser());
app.use(bodyParser.urlencoded ({extended:false}));
app.use(express.urlencoded({extended: true}));
const { MongoClient } = require("mongodb");
// Connection URI
const uri =
  "mongodb+srv://abbyychia:test@abigail.rwnzu.mongodb.net/?maxPoolSize=20&w=majority";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


  


//MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
//    if (error) throw error;
//    database = client.db(DATABASE_NAME);
//    collection = database.collection("newcollection");
//    console.log("MongoDB connected");

//});

app.get("/", function(req, res){
    res.render('home');
});

app.post("/", function(req, res) {
    collection.create(req.body, (err, result) => {
        if (err) return console.log(err);
        console.log('saved to database');
    });
        function formv3(){
            function formv3(){
                // Create the new request 
                var xhr = new XMLHttpRequest();
                var url = 'https://api.hsforms.com/submissions/v3/integration/submit/9059838/77c8fef7-52ad-45b0-9e13-c0b50357c441'
                
                // Example request JSON:
                var data = {
                  "fields": [
                    {
                      "name": "email",
                      "value": req.body.email
                    },
                    {
                      "name": "firstname",
                      "value": req.body.firstname
                    }
                  ],
                  "context": {
                    "hutk": req.cookies.hubspotutk,
                    "pageUri": "http://www.portfolio.com/contact",
                    "pageName": "Portfolio contact me"
                  }
                }
            
                var final_data = JSON.stringify(data)
            
            
            xhr.open('POST', url);
            // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
            xhr.setRequestHeader('Content-Type', 'application/json');
        
            xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == 200) { 
                    console.log(xhr.responseText); // Returns a 200 response if the submission is successful.
                } else if (xhr.readyState == 4 && xhr.status == 400){ 
                    console.log(xhr.responseText); // Returns a 400 error the submission is rejected.          
                } else if (xhr.readyState == 4 && xhr.status == 403){ 
                    console.log(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.           
                } else if (xhr.readyState == 4 && xhr.status == 404){ 
                    console.log(xhr.responseText); //Returns a 404 error if the formGuid isn't found     
                }
               }
        
        
            // Sends the request 
            
            xhr.send(final_data)
         }
        
         formv3();
        }
    });

app.listen(4000, () => {
    console.log('This app is running on port 3000')
  });
   
