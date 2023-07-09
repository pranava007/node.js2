const express = require("express");

const router = express.Router();

router.get('/test',(req,res,next)=>{

    res.send('<h1>Welcom To TestPage</h1>')

})

module.exports = router;