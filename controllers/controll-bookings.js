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
        const { person, car,booking , delivery, observations } = req.body

        try {
            //const booking = await Booking.findById(id)
            const booking = new Booking(req.body)
            await booking.save()
            res.status(200).json({ "Success": true, "Data": booking })
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
            res.status(200).json({ "Success": true, "Data": result })
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