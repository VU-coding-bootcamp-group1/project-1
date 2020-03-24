// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
// 		"x-rapidapi-key": "cd41e7ceecmshaa77971b674259cp1cbd8ejsne9ded19a3f9e"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

console.log("loaded");


// global array of countries
var countries = ["United States", "Canada", "Mexico",];

for (var i = 0; i < countries.length; i++) {
    var country = countries[i];
    var queryURL = "https://corona.lmao.ninja/countries/" + country;
        $.ajax({
            url: queryURL,
            dataType: 'json',
            success: function(data) {
                console.log(data);
            }
        }) 
    };     





// // ajax call for ny times api

// function buildQueryUrl() {
//     var queryURL = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&api-key=tRkWuiJbzNglNxZ4AHhGjmuVkPBAF7QR";
    
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {
//           console.log(response);
//     });


// };

// buildQueryUrl();

// function updatePage(NYTdata) {

    
//     for (var i = 0; i < articles; i++) {
    
//     var article = NYTdata.response.docs[i];
//     var headline = article.headline.main;
//     var byLine = article.byline.original;
//     var webURL = article.web_url;
//     var pubDate = article.pub_date;
//     }
// }

