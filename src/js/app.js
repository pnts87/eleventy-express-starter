const express = require('express');
const app = express();

app.use(express.static(process.cwd() + '/public'));

app.listen(8000);
