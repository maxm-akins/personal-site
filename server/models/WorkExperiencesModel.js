const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkExperincesSchema = new Schema({
    companyName: {
        type: String,
        required: true,
    },

    companyLocation: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    details: {
        type: Object,
        required: true,
    },
    order: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model("work-experiences", WorkExperincesSchema);
