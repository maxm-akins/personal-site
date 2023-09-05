const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: false,
    },
    webLink: {
        type: String,
        required: false,
    },
    details: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model("projects", ProjectsSchema);
