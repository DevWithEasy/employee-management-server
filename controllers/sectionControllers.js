const Section = require("../models/Section")
const createError = require("../utils/createError")
const fs = require('fs');

exports.createSection = async (req, res, next) => {
    try {
        if (!req.file) {
            return createError(400, 'File not Found.')
        }

        const newSection = new Section({
            name: req.body.name,
            image: req.file.filename
        })

        const section = await newSection.save()

        res.status(200).json({
            success: true,
            status: 200,
            data: section,
            message: 'Section created successfully.'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.updateSection = async (req, res, next) => {
    try {

        const section = await Section.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name
            }
        },{new : true})

        res.status(200).json({
            success: true,
            status: 200,
            data: section,
            message: 'Section updated successfully.'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.deleteSection = async (req, res, next) => {
    try {

        const section = await Section.findById(req.params.id)

        await Section.findByIdAndDelete(req.params.id)

        fs.unlink(`public/image/${section.image}`, (err) => {
            if (err) return
        })

        res.status(200).json({
            success: true,
            status: 200,
            data: section,
            message: 'Section deleted successfully.'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.getSections = async (req, res, next) => {
    try {
        const sections = await Section.find()
        res.status(200).json({
            success: true,
            status: 200,
            data: sections,
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