const Booking = require('../models/booking')

module.exports = {
    index: async (req, res) => {
        try {
            const bookings = await Booking.find()
            res.status(200).json({ "Success": true, "Data": bookings })
        } catch (err) {
            res.status(500).json({ "Success": false, "Error": err })
        }
    }, save: async (req, res) => {
        const { person, car, booking, delivery, observations } = req.body
        const query = { booking: booking , car: car }
        const search = await Booking.find(query)
        try {
            const bookingNew = new Booking(req.body)
            if(search!=""){
                res.status(404).json({"Success":false, "Data":`Existe una reserva existente para la fecha y hora: ${booking} y auto: ${car}`})
            }else{
                await bookingNew.save()
                res.status(200).json({ "Success": true, "Data": bookingNew })
            }
        } catch (err) {
            res.status(500).json({ "Success": false, "Error": err })
        }
    }, findById: async (req, res) => {
        const { id } = req.params
        try {
            const result = await Booking.findById(id)
            res.status(200).json({ "Success": true, "Data": result })
        } catch (err) {
            res.status(500).json({ "Success": false, "Error": err })
        }
    }, update: async (req, res) => {
        const { id } = req.params
        const booking = req.body
        try {
            const result = await Booking.findByIdAndUpdate(id, booking)
            res.status(200).json({ "Success": true, "Data": booking })
        } catch (err) {
            res.status(500).json({ "Success": false, "Error": err })
        }
    }, erase: async (req, res) => {
        const { id } = req.params
        try {
            const result = await Booking.findByIdAndDelete(id)
            res.status(200).json({ "Success": true, "Data": result })
        } catch (err) {
            res.status(500).json({ "Success": false, "Error": err })
        }
    }
}