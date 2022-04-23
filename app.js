const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    
    const url = "https://api.adviceslip.com/advice"

    https.get(url, (response) => {

        console.log(response.statusCode);

        response.on('data', (data) => {
           const advice = JSON.parse(data);
           const dat = advice.slip.advice;
           console.log(dat);
           
           const item = document.getElementById

            res.sendFile(__dirname + "/index.html");
        });

    });

})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});