var db = require("../db/models");

module.exports = {
    filterEve: function (req, res) {
        db.Event
            .find(req.query)
        db.Event.find({
            keyword: req.params.id
        }).then((event) => {
            console.log(`This is the charity response \n ${event}`);
            res.json(event);
        })
    }
}