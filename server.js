const express = require('express');
const PORT = process.env.PORT || 3001;
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes/noteRoute')
const data = require('./Develop/db/db.json')


const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('Develop/public'));
app.use('/api/notes', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})