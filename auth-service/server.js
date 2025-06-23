const express = require('express');
const app = express();
app.get('/auth', (req, res) => res.json({status: 'auth service OK'}));
app.listen(3001, () => console.log('Auth running on 3001'));
