require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const userRoutes = require('./server/routes/users')
const mushroomRoutes = require('./server/routes/mushrooms')

const port = process.env.PORT || 4000

const app = express();
app.use(express.static('client'))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {res.send("Backend Says Hello!")})

// use the /api prefix to divert requests for data from request for pages
app.use('/api', userRoutes)
app.use('/api', mushroomRoutes)

app.listen(port, () => console.log(`Server is listening on port: ${port}`))
