var db = require("../db/models");

module.exports = {
    filterEve: function(req, res) {
        db.Event
        .find(req.query)
        // .filter(event => {event.keyword = req.params.id}).then(function(events) {
        //     res.json(events);
        //     console.log(`Below are the filtered events: \n`);
        //     console.log(events);
        // });
        db.Event.find({
            keyword: req.params.id
        }).then((event)=>{
            res.json(event);
        })
    }
}