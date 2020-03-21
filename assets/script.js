var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "cd41e7ceecmshaa77971b674259cp1cbd8ejsne9ded19a3f9e"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});