// Controller for our scraper
// ============================
var db = require("../db/models");
var scrapePet = require("../scripts/scrapePet");

module.exports = {
  scrapePetitions: function (req, res) {
    var keywords = ["climate-change", "youth", "health", "international-development", "disability", "mental-health", "famine", "drought", "immigration", "military-veterans", "homeless", "education", "womens-rights", "animal-rights", "disaster-relief", "lgbt"];


    for (i = 0; i < keywords.length; i++) {
      console.log("hit scrapePetitions");
      // scrape the NYT
      scrapePet(keywords[i]).then(function (petitions) {
        console.log("...INSERTING Petitions into db");
        return db.Petition.create(petitions);
      }).then(function (dbPetition) {
        if (dbPetition.length === 0) {
        }
        else {
        }
      }).catch(function (err) {

      });
    }; //end of FOR LOOP
  }
};