const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.listen('3000', function() {
  console.log('Lol porta 3000');
});