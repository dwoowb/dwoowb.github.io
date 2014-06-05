$(document).ready(function() {
	$(".home-butt").click(function(event) {
		event.preventDefault();
		$(".home").removeClass("hidden");
		$(".resume").addClass("hidden");
		$("section.projects").addClass("hidden");
	});
	
	$(".resume-butt").click(function(event) {
		event.preventDefault();
		$(".resume").removeClass("hidden");
		$(".home").addClass("hidden");
		$("section.projects").addClass("hidden");
	});
	
	$(".projects-butt").click(function(event) {
		event.preventDefault();
		$("section.projects").removeClass("hidden");
		$(".home").addClass("hidden");
		$(".resume").addClass("hidden");
	});
});