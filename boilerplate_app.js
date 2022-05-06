// This is a default boilerplate for express server.
// There must be also "npm init" + installed "npm install exprees body-parser request" in bash
//jshint esversion:6
const bodyParser = require("body-parser");
const express = require("express");
const request = require('request');

const app = express();

app.listen(3000, function (){
  console.log('Server is running on port 3000');
});
