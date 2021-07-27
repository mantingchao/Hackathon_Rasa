const express = require('express');
const app = express();
const port = 5055;
var fs = require('fs');

// app.get('/', (req, res) => res.send('Test Rasa!'));
function render(filename, params) {
  var data = fs.readFileSync(filename, 'utf8');
  for (var key in params) {
    data = data.replace('{' + key + '}', params[key]);
  }
  return data;
}

app.get('/', function (req, res) {
  res.send(render('index.html', {
    name: req.params.name
  }));
})
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`));