const express = require("express");
//use express router
const router = express.Router();
// export
module.exports = router;

const Session = require('../models/session')


// Routes

// Get all sessions
router.get("/", async (req, res) => {
    try {
        const sessions = await Session.find()
        res.json(sessions)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});
// Getting one by id
router.get("/:id", getSession, (req, res) => {
  res.send(res.session);
});

// Create one
router.post("/", async (req, res) => {
    const session = new Session({
        exercise: req.body.exercise,
        reps: req.body.reps,
        weight: req.body.weight,
        date: req.body.date
    })

    try {
        const newSession = await session.save()
        res.status(201).json(newSession)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Update one
router.patch("/:id", getSession, async (req, res) => {
    if (req.body.exercise != null) {
        res.session.exercise = req.body.exercise
    }
    if (req.body.reps != null) {
        res.session.reps = req.body.reps
    }
    if (req.body.weight != null) {
        res.session.weight = req.body.weight
    }
    if (req.body.date != null) {
        res.session.date = req.body.date
    }

    try {
        const updatedSession = await res.session.save()
        res.json(updatedSession)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Delete one by id
router.delete("/:id", getSession, async (req, res) => {
    try {
        await res.session.remove()
        res.json({ message: 'Session deleted successfully.' })
    } catch {
        res.status(500).json({ message: err.message })
    }
});

// middleware function
async function getSession(req, res, next) {
    let session
    try {
        session = await Session.findById(req.params.id)
        if (session == null) {
            return res.status(404).json({ message: 'Cannot find session'}) // couldnt not find
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.session = session
    next()
}