require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const userRoutes = require('./routes/users')
const mushroomRoutes = require('./routes/mushrooms')

const app = express();

const port = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())

app.use(userRoutes)
app.use(mushroomRoutes)

app.listen(port, () => console.log(`Server is listening on port: ${port}`))
