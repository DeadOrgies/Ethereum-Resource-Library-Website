//frontend utils
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const borbon = require('bourbon');

app.use(express.static('./'))
app.use('scripts', express(__dirname + './scripts'));


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {


    res.render('index');

})

app.post('/SignUp', async (req, res) => {

    return res.render('signupview')

});

app.post('/SignIn', async (req, res) => {
    return res.render('signin')
});

app.post('/signedin', async (req, res) => {
    return res.render('index')
});
app.post('/postlogin', async (req, res) => {
    return res.render('indexlogged')
});

app.post('/trader', async (req, res) => {
    return res.render('traders')
});

app.post('/dev', async (req, res) => {
    return res.render('dev')
});

app.post('/analyst', async (req, res) => {
    return res.render('analyst')
});

app.post('/newbie', async (req, res) => {
    return res.render('newbie')
});

app.post('/appslider', async (req, res) => {
    return res.render('dappsslider')
});
app.post('/home', async (req, res) => {
    return res.render('indexlogged')
});




app.listen(port, () => console.info('Listening on port ' + port));