require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const userRoutes = require('./server/routes/users')
const mushroomRoutes = require('./server/routes/mushrooms')

const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(userRoutes)
app.use(mushroomRoutes)

app.listen(port, () => console.log(`Server is listening on port: ${port}`))
