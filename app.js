const express = require('express');

const path = require('path');

const app = express();


app.use(express.static('public'))

/*
app.listen(3030, () =>
console.log('Servidor corriendo en http://localhost:3030')
);
*/
// levantar nuestro servidor,  si no corre en Render corre en el 3001 de nuestra PC
const port = process.env.PORT || 3001;
app.listen(port,() => console.log('Servidor corriendo en el puerto http://localhost:' + port));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'));
});


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'));
});
