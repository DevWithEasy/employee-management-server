const Designation = require("../models/Designation")

exports.createDesignation = async (req, res, next) => {
    try {

        const newDesignation = new Designation({
            name: req.body.name,
        })

        const designation = await newDesignation.save()

        res.status(200).json({
            success: true,
            status: 200,
            data: designation,
            message: 'Designation created successfully.'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.updateDesignation = async (req, res, next) => {
    try {

        const designation = await Designation.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name
            }
        },{new : true})

        res.status(200).json({
            success: true,
            status: 200,
            data: designation,
            message: 'Designation updated successfully.'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.deleteDesignation = async (req, res, next) => {
    try {

        await Designation.findByIdAndDelete(req.params.id)

        res.status(200).json({
            success: true,
            status: 200,
            data: {},
            message: 'Designation deleted successfully.'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.getDesignations = async (req, res, next) => {
    try {
        const designations = await Designation.find()
        res.status(200).json({
            success: true,
            status: 200,
            data: designations,
            message: ''
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}