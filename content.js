$(document).on("ready", function() {
	window.setInterval(function() {
		performCleanup();
	}, 1000);
});

function performCleanup() {
	// Remove the side bars
	$("#leftCol").remove();
	$("#rightCol").remove();

	// Expand the actual content now that the sidebars are gone
	$("#contentCol").css("margin-left", "0px");
	//$("#contentArea").css("width", "100%");

	// Find anchor tags where the content is Sponsored
	// then go upstream to find its parent container and remove it
	var sponsoredLinks = $("a:contains('Sponsored')");
	var sponsoredPosts = sponsoredLinks.parents("[id^=hyperfeed_story_id]");
	sponsoredPosts.remove();

	// Find all posts where there is an anchor that links to any of the
	// shitty news sources that I don't want to see
	var shittyNews = $("a[href*=huffington], a[href*=relevantmagazine], a[href*=viralnova], a[href*=buzzfeed], a[href*=mashable], a[href*=reddit]");
	var shittyPosts = shittyNews.parents("[id^=hyperfeed_story_id]");
	shittyPosts.remove();
}