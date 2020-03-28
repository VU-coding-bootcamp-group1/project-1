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

// var countries = []; we could add countries into an array that displays on the screen. When the user clicks that button?, it could generate a map

$("#submit").on("click", function(event) {

    event.preventDefault();

    var country = $("#search-form").val(); // country searched
    
    var queryURL = "https://corona.lmao.ninja/countries/" + country;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        if (response.country === undefined){
          alert("input a country");
          return;
        }
    
        $("#country").append(`<p> ${response.country}</p>`)
        $("#totalCases").append(`<p> ${response.cases}</p>`)
        $("#newCases").append(`<p> ${response.todayCases}</p>`)
        $("#totalDeaths").append(`<p> ${response.deaths}</p>`)
        $("#newDeaths").append(`<p> ${response.todayDeaths}</p>`)
        $("#recovered").append(`<p> ${response.recovered}</p>`)

    });

    
});

    function searchFromMap(countrySelected){
      var queryURL = "https://corona.lmao.ninja/countries/" + countrySelected;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        if (response.country === undefined){
          alert("input a country");
          return;
        }
    
        $("#country").append(`<p> ${response.country}</p>`)
        $("#totalCases").append(`<p> ${response.cases}</p>`)
        $("#newCases").append(`<p> ${response.todayCases}</p>`)
        $("#totalDeaths").append(`<p> ${response.deaths}</p>`)
        $("#newDeaths").append(`<p> ${response.todayDeaths}</p>`)
        $("#recovered").append(`<p> ${response.recovered}</p>`)

    });
    }
    
  




     

// // ajax call for ny times api

function buildQueryUrl() {
  // var queryURL = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&api-key=tRkWuiJbzNglNxZ4AHhGjmuVkPBAF7QR";
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&api-key=Vio4br6H4gJ30hMPlAgpDhJ0rtGrJa76";
  return queryURL;
}
function updatePage(nytData) {
  console.log(nytData.response.docs[0].abstract);
  console.log(nytData.response.docs[0]);
  
  numArticles = 5;
  for (var i = 0; i < numArticles; i++) {
     var article = nytData.response.docs[i];
    var headline = article.headline.main;
    var byLine = article.byline.original;
    var webURL = article.web_url;
     var pubDate = article.pub_date;
     if(pubDate.length > 10) {pubDate = pubDate.substring(0,10)};
     var lead = article.lead_paragraph
    var newArticle = $(`<tr><th>${i+1}</th><th><a target="_blank" href="${webURL}">${headline}</a><br><p>${lead}</p></th><th>${byLine}</th><th>${pubDate}</th></tr>`);
    $("#article").append(newArticle);

  }
}

window.onload = function() {
  event.preventDefault();
  var queryURL = buildQueryUrl();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);
};


// nyt times documentation
    //  article = NYTdata.response.docs[i];
    //  headline = article.headline.main;
    //  byLine = article.byline.original;
    //  webURL = article.web_url;
    //  pubDate = article.pub_date;
   
    map.on('load', function () {
      // Add a GeoJSON source containing the state polygons.
      map.addSource('states', {
          'type': 'geojson',
          'data': 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson'
      });
  
      // Add a layer showing the state polygons.
      map.addLayer({
          'id': 'states-layer',
          'type': 'fill',
          'source': 'states',
          'paint': {
              'fill-color': 'rgba(200, 100, 240, 0.4)',
              'fill-outline-color': 'rgba(200, 100, 240, 1)'
          }
      });
  });
  
  
  // When a click event occurs near a polygon, open a popup at the location of
  // the feature, with description HTML from its properties.
  map.on('click', function (e) {
      var features = map.queryRenderedFeatures(e.point, { layers: ['states-layer'] });
      if (!features.length) {
          return;
      }
  
      var feature = features[0];
      searchFromMap(feature.properties.name);
      var popup = new mapboxgl.Popup()
          .setLngLat(map.unproject(e.point))
          .setHTML(`<h3>${feature.properties.name}</h3>`)
          .addTo(map);

  });
  
  // Use the same approach as above to indicate that the symbols are clickable
  // by changing the cursor style to 'pointer'.
  map.on('mousemove', function (e) {
      var features = map.queryRenderedFeatures(e.point, { layers: ['states-layer'] });
      map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
  });