const express = require('express');
const app = express();
app.get('/product', (req, res) => res.json({status: 'product service OK'}));
app.listen(3002, () => console.log('Product running on 3002'));
