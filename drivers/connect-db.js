const mongoose = require('mongoose')
const URI = 'mongodb://127.0.0.1:27017/bookings'

mongoose.set('strictQuery', false)

mongoose.connect(URI)
    .then(()=>{
        console.log("Connected to Mongo bookings")
    })
    .catch(err => console.log(err))

module.exports = mongoose