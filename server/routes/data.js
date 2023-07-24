const express = require("express");
const router = express.Router();
require("dotenv").config();
const verifyJWT = require("../middleware/verifyJWT");
const WorkExperiencesModel = require("../models/WorkExperiencesModel")
const ProjectsModel = require("../models/ProjectsModel")
// PROP TYPE END POINTS


router.get('/workExperience', async (req, res) => {
    try {
        const exps = await WorkExperiencesModel.find({}, { _id: 0, __v: 0 }).sort({ order: -1 });
        console.log(exps);

        res.status(200).json(exps);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});

router.get('/projects', async (req, res) => {
    try {
        const projs = await ProjectsModel.find({}, { _id: 0, __v: 0 }).sort({ order: -1 });
        console.log(projs);

        res.status(200).json(projs);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});


router.post('/workExperience', async (req, res) => {
    try {
        const proj = new ProjectsModel({});
        proj.name = "Language Development Site"
        proj.details = "During my work in the FACETLab at Pitt, I assisted in the conversion of a Objective C iOS app into a React based website. This website helped young children develop their English and/or Spanish comprehension skills while allowing reasearchers to analyze the factors which contributed or hindered the children's learning."
        proj.order = 1



        proj.save().then(() => {
            console.log("new proj experience saved");
            res.status(200).json({ message: "Data Successfully Created." });
            return
        },
            (err) => {
                console.log(err);
                res.status(err.status || 400).json({ message: err.message });
                return;

            })
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});



module.exports = router;
