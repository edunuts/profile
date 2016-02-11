var shuffleArray = ['Start searching for courses "B. Tech Computer Science"',
					'Search for areas "Delhi University North Campus"',
					'Search for college "Shri Ram College of Commerce"',
					];
var container = $("#search-intro-text");
container.shuffleLetters();
window.setInterval(function(){
	$("#search-intro-text").html(shuffleArray[Math.floor(Math.random()*shuffleArray.length)]).shuffleLetters();
},4000);
$(".hp-search-select").on('click', function() {
	$(".location-pop").slideToggle();
});