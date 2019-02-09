var db = require("../db/models");

module.exports = {
    filterPet: function(req, res) {
        db.Petition
        .find(req.query)
        // .filter(petition => {petition.keyword = req.params.id}).then(function(petitions) {
        //     res.json(petitions);
        //     console.log(`Below are the filtered petitions: \n`);
        //     console.log(petitions);
        // });
        db.Petition.find({
            keyword: req.params.id
        }).then((petition)=>{
            res.json(petition);
        })
    }
}