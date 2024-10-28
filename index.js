// server.js
const express = require('express');
const  pool  = require('./modal/game.schema');
const cors = require('cors');
const gameRoutes = require('./routes/game.routes');


const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.json());
app.use(cors());


app.use('/', gameRoutes);


pool.connect().then((res)=> {
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log('PostgreSQL connected');
           
        });
    })
    .catch(err => {
        console.error('Connection error', err.stack);
    });


module.exports = pool; 
