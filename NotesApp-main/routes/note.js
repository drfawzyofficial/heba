const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const upload = require("../Middlewares/upload");

router.get("/add", (req, res) => {
    res.render("add_notes", { title: "Add notes" });
});
router.post('/addnote', upload, async (req, res) => {
    try {
        await new Note(req.body).save();
        res.redirect("/")
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;