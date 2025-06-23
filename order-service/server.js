const express = require('express');
const app = express();
app.get('/order', (req, res) => res.json({status: 'order service OK'}));
app.listen(3003, () => console.log('Order running on 3003'));
