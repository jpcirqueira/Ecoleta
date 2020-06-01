import express, { response } from 'express';

const app = express();

app.get('/', (request, response) => {
    //alert('listagem')

    response.json([
        'inicio',
    ]);
});

app.listen(3333); 