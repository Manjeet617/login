/* const Note = require('../Models/Note');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const notes = await Note.find();
    return res.json({
        data: notes,
        message: "Notes found successfully.",
        success: true
    });
})

module.exports = router; */