const express = require('express');
const {json} = require('body-parser');
const expressSession = require('express-session')
// const cors = require('cors');

const masterRoutes = require('./server/masterRoutes');

const app = express();
const port = 8020;

// app.use( cors() ); don't need you anymore
app.use( express.static(`${__dirname}/public`) );
app.use( json() );
//Everything goes below app.use
masterRoutes(app);






app.listen(port, ()=> {
console.log(`Express is running on ${port}`);
});
