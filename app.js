const express = require('express')
require('dotenv').config();

const app = express()
// Port is read from enviroment variables (.env file)
const port = process.env.PORT;

// Add templates or views to public/ to show on webserver
app.use( express.static('public') ); 


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, () => {
    console.log(`webserver app listening at http://localhost:${port}`);
})