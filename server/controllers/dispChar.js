var db = require("../db/models");

module.exports = {
    filterChar: function (req, res) {
        db.Charity.find({
            keyword: req.params.id
        }).then((charity) => {
            console.log(`This is the charity response \n ${charity}`);
            res.json(charity);
        })
    }
}