const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(cors()); // Liberar o uso da api para todos os locais

app.get('/', async (req, res) => { // rota básica
    try {
        
        const { data } = await axios('https://jsonplaceholder.typicode.com/users');
        // data -> dado já transformado em json
        console.log(data);
        return res.json(data); // retorna em forma de JSON

    } catch(err) {
        console.log(err);
    }
}); // servindo API através dessta rota!

app.listen('4567');