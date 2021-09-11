const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({id: 1, title: 'sample product'});
});

//Test
app.listen(3000, () => console.log('Example app is listening on port 3000.'));