const express = require('express');
let serveStatic= require('serve-static');
const app = express();
const PORT = 3000;


app.use(serveStatic(__dirname));


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
});


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
