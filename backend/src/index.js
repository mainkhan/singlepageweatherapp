//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// define the Express app
const app = express();

// the database
let users = [{
        id: "mainkhan",
        firstname: "Main",
        lastname: "Khan",
        password: 12345
    }];

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// retrieve all users
app.get('/', (req, res) => {
  const qs = users.map(u => ({
    id: u.id,
    firstname: u.firstname,
    lastname: u.lastname,
    password: u.password,
  }));
  res.send(qs);
});

// get a specific question
app.get('/:id', (req, res) => {
  const user = users.filter(q => (q.id === parseInt(req.params.id)));
  if (user.length > 1) return res.status(500).send();
  if (user.length === 0) return res.status(404).send();
  res.send(user[0]);
});

// insert a new user
app.post('/', (req, res) => {
  const {id, firstname, lastname, password} = req.body;
  console.log(req.body);
  const newUser = {
    id: id,
    firstname: firstname,
    lastname: lastname,
    password: password
  };
  users.push(newUser);
  res.status(200).send();
});

// remove a user
app.delete('/:id', (req, res) => {
  // remove from the master list (db)
  console.log(req.params.id);
  const index = users.findIndex(u => u.id === req.params.id);

  if (index >= 0){
    console.log("deleting " + req.params.id + " -- index is " + index);
    delete users[index];

    // prune nulls from the list
    var filtered = users.filter(function (el) {
    return el != null;
    });
    users = filtered;

    return res.status(500).send();
  } 
  else{
    return res.status(404).send();
  }
});

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});