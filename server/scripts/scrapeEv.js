var axios = require("axios");
var cheerio = require("cheerio");


var scrapeEv = function(keyword) {


    return axios.get("https://www.eventbrite.com/d/ca--davis/" + keyword).then(function(res){
        
        var $ = cheerio.load(res.data);

        var events = [];

        var key = keyword;
        console.log(`This is the current keyword: ${key}`);

        $("li").each(function(i, element) {
            var title = $(this)
              // .find(".card-text--truncated__three")
              .find(".event-card__formatted-name--is-clamped")
              .text()
              .trim();
      
            // Grab the URL of the article
            var url = $(this)
              .find("a")
              .attr("href");
      
            // Then we grab any children with the class of summary and then grab it's inner text
            // We store this to the sum variable. This is the article summary
            var sum = $(this)
              .find(".eds-text-bs--fixed")
              .first()
              .text()
              .trim();
            // So long as our headline and sum and url aren't empty or undefined, do the following
            if (title && sum && url) {
              // This section uses regular expressions and the trim function to tidy our headlines and summaries
              // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
              var titleNeat = title.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
              var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
              // Initialize an object we will push to the articles array
              var dataToAdd = {
                keyword: keyword,
                title: titleNeat,
                summary: sumNeat,
                url: url
                }; //dataToAdd

            events.push(dataToAdd);
            //    //console.log(events);
        }; //if statement
    }); //$('li').each
    console.log(events);
    return events;
        //console.log(events);
    }); //end of AXIOS call
    //console.log(events);
    //end of forEach
}; //END OF FUNCTION

// keywords.forEach(key => scrapeEv(key, events))
// console.log(events)

//scrapeEv();

//export
module.exports = scrapeEv;