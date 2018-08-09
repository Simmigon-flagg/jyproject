//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=$search&begin_date=$bDate&end_date=$eDate&limit=$responses&sort=newest&api_key=950ba3779f474d49aa1a605a55a6e151

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest";
var tSearch = $("#search").val();
var bDate = $("#bDate").val();
var eDate = $("#eDate").val();
var apikey = "&api_key=950ba3779f474d49aa1a605a55a6e151";
var nResponse = $("number").val();

if (tSearch !== ""){
	queryURL += "&q=" + tSearch;
}
else{
	alert("Please enter a search term");
	return false;
}

if (bDate){
	queryURL += "&begin_date=" + bDate;
}

if (eDate){
	queryURL += "&end_date=" + bDate;	
}

queryURL += apikey;

console.log(queryURL);

$.ajax({
url: queryURL,
method: "GET"
}).then(function(response){
	console.log(response);
	results = response.docs;
	
	for(var i = 0; i < nResponse ; i++){
	var newDiv = $("<div>");
	var newNumber = $("<span>").addClass(".button");
	newP.text(i+1);
	
}
});