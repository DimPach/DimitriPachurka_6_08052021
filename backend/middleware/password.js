const passwordValidatorSchema = require('../models/password.js');

module.exports = (req, res, next)=> { 
    try {
        if(!passwordValidatorSchema.validate(req.body.password)) {
            console.log("if")
            res.status(400).json({error: "Mauvais mot de passe"})
        } else {
            console.log("else")
            next();
            
        }
    }
    catch(error) {
        res.status(400).json({error})
    }
};


