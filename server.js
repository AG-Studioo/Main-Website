const exp = require('constants');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use('/index.html', express.static(__dirname + 'index.html'))
app.use('/html', express.static(__dirname + '/html'));
app.use('/css' , express.static(__dirname + '/css'));
app.use('/Fonts', express.static(__dirname + '/Fonts'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/Images', express.static(__dirname + '/Images'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');

})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/html/contact.html');
})





app.listen(PORT ,()=>{
    console.log(`the server is built on port: ${PORT}`);
})