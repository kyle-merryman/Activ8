// Controller for our Event scraper
// ============================
var db = require("../db/models");
var scrapeEv = require("../scripts/scrapeEv");

module.exports = {
  scrapeEvents: function (req, res) {
    var keywords = ["climate-change", "youth", "health", "international-development", "disability", "mental-health", "famine", "drought", "immigration", "military-veterans", "homeless", "education", "womens-rights", "animal-rights", "disaster-relief", "lgbt"];

    for (i = 0; i < keywords.length; i++) {
      console.log("hit scrapeEvents");
      scrapeEv(keywords[i]).then(function (events) {
        console.log("...INSERTING Events into db");

        return db.Event.create(events);
      })
        .then(function (dbEvent) {
          console.log(`THIS IS THE ARRAY ALLEVENTS`);
          if (dbEvent.length === 0) {
          }
          else {
          }
        })
        .catch(function (err) {
          // This query won't insert articles with duplicate headlines, but it will error after inserting the others
        });
    } //end of for/loop
  }

};