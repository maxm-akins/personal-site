const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClassesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },

    term: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    details: {
        type: Object,
        required: true,
    },

});

module.exports = mongoose.model("classes", ClassesSchema);
