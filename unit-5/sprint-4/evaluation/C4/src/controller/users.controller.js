const express = require("express")
const router = express.Router()
const User = require("../model/users.model")
const { body, validationResult } = require('express-validator');

router.post("", body("first_name").isString().isLength({ min: 3, max: 30 }).withMessage("first_name Should be more than 3 lenght"),
    body("last_name").isString().isLength({ min: 3, max: 30 }).withMessage("last_name Should be more than 3 lenght"),
    body("age").isNumeric().custom((value) => {
        if (value > 1 && value < 150) {
            return true
        }
        else {
            throw new Error("age should be greater than 1 and less than 150")
        }
    }),
    body("email").isString().custom((value) => {
        if (!value.includes("@")) {
            throw new Error(" @  ,issing in email")
        }
        if (!value.includes(".com")) {
            throw new Error(".com  missing in email")
        }
        return true
    }),

    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const user = await User.create(req.body)
            return res.status(201).send(user)
        }
        catch (err) {
            return res.status(500).send(err.message)
        }
    })





router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec()
        return res.status(201).send(user)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})
module.exports = router