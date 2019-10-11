const express = require('express');
const bodyParser = require('body-parser')
const http = require('http')


const feedRoutes = require('./routes/feed')

const app = express();

// app.use(bodyParser,urlencoded()); 
app.use(bodyParser.json()) //application / json
//berarti semua yang berakhir dengan /feed akan memanggil fungsi yang ada di dalam method 

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'OPTIONS,GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/feed',feedRoutes);

const port = process.env.PORT || 8083;
const server = http.createServer(app);


server.listen(port, () => {
    //    let's print a message when the server run successfully
    console.log("Server restarted successfully")
});
