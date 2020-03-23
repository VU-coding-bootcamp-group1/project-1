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
var countries = ["Uganda", "Colombia", "Italy"];

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

    // function displayData() {
    //     $("#submit").on("click", )
    // }

// 1. country typed click of submit button
// 2. jquery grabbing search input and using .text to place it in display div
// 3. deaths, cases is pulled from country that is chosen
// 4. 


// $("#searchForm").text





// ajax call for virus tracker api
// for loop to go through array l.17   

    // function buildQueryUrl() {
    //    var queryURL = "https://corona.lmao.ninja/countries"
    //     $.ajax({
    //         url: queryURL,
    //         dataType: 'json',
    //         success: function(data) {
    //           console.log(data);
    //           for (var i = 0; i < data.length; i++) {
                  
    //           }
    //           console.log(data[195]);
    //         }
    //       });
    // }

    // buildQueryUrl();


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







// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronvirus&api-key=tRkWuiJbzNglNxZ4AHhGjmuVkPBAF7QR



// apiurl1: https://corona.lmao.ninja/countries
    // data.updated ; data.cases ; data.deaths ; data.recovered ; data country
                // data.updated => new date(data.updated)
    // worldometer source