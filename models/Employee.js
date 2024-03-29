const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    IDNo : {
        type : Number,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true,
        unique : true
    },
    nid : {
        type : String,
        required : true,
        unique : true
    },
    dob : {
        type : Date,
        required : true,
    },
    image : {
        type : String,
        required : true,
    },
    barCode : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    salary : {
        type : Number,
        required : true,
    },
    section : {
        type : mongoose.Types.ObjectId,
        ref : 'Section',
        required : true,
    },
    designation : {
        type : mongoose.Types.ObjectId,
        ref : 'Designation',
        required : true,
    },
    joinDate : {
        type : Date,
        required : true
    },
    closeDate : {
        type : Date
    },
    status : {
        type : String,
        emun : ['Open', 'Closed'],
        default : 'Open'
    }
},{timestamps : true})

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee