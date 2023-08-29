const router = require('express').Router();
const User = require('../models/User');

//Register
router.post("/register", async (req, res) => {
    const user = await new User({
        username: "abrar hussain",
        email: "abc@gmail.com",
        password: "123456",
    });

    await user.save();
    res.send("OK");
});


module.exports = router;
