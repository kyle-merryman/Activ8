var db = require("../db/models");

module.exports = {
    filterChar: function(req, res) {
        
        // .filter(charity => charity.keyword = req.params.id).then(function(charities) {
        //     res.json(charities);
        //     console.log(`Below are the filtered charities: \n`);
        //     console.log(charities);
        // });

        db.Charity.find({
            keyword: req.params.id
        }).then((charity)=>{
            res.json(charity);
        })
    }
}