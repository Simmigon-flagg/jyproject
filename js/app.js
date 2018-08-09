//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=$search&begin_date=$bDate&end_date=$eDate&limit=$responses&sort=newest&api_key=950ba3779f474d49aa1a605a55a6e151

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest";
var tSearch = $("#searchterm").val();
var bDate = $("#startyear").val();
var eDate = $("#endyear").val();
var apikey = "&api_key=950ba3779f474d49aa1a605a55a6e151";
var nResponse = $("#NumberofSearch").val();

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
		var newNumber = $("<span>").addClass("button").text(i+1);
		var newTitle = $("<span>").addClass("title").text(results.docs[i].headline.main);
		var newP = $("<p>").text(results.docs[i].byline.original);
		newDiv.append(newNumber);
		newDiv.append(newTitle);
		newDiv.append(newP);
		$("#result").append(newDiv);	
}
});