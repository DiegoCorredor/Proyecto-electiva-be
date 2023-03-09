const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

//connection to mongose
require('./drivers/connect-db')

//Settings
app.set('port', process.env.PORT || 3000)

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/bookings',require('./routes/bookings'))

app.listen(app.get('port'),()=>{
    console.log('listening on port http://localhost:'+app.get('port'))
})