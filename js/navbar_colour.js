$(document).ready(function() {
	//Code for Profile
	$("#profile").mouseenter(function() {
		$("#profile").animate({color: "#0080FF"}, "fast");
		$("#content").animate({"border-top-color": "10px solid #0080FF"}, "fast");
	});
	
	$("#profile").mouseleave(function() {
		$("#profile").animate({color: "#000000"}, "fast");
		$("#content").animate({"border-top-color": "10px solid #000000"}, "fast");
	});
	
	//Code for Blog
	$("#blog").mouseenter(function() {
		$("#blog").animate({color: "#FFA300"}, "fast");
		$("#content").animate({"border-top-color": "10px solid #FFA300"}, "fast");
	});
	
	$("#blog").mouseleave(function() {
		$("#blog").animate({color: "#000000"}, "fast");
		$("#content").animate({"border-top-color": "10px solid #000000"}, "fast");
	});
	
	//Code for Resume
	$("#resume").mouseenter(function() {
		$("#resume").animate({color: "#007E1A"}, "fast");
		$("#content").animate({"border-top-color": "10px solid #007E1A"}, "fast");
	});
	
	$("#resume").mouseleave(function() {
		$("#resume").animate({color: "#000000"}, "fast");
		$("#content").animate({"border-top-color": "10px solid #000000"}, "fast");
	});
	
	//Code for Contact
	$("#contact").mouseenter(function() {
		$("#contact").animate({color: "#ED2939"}, "fast");
		$("#content").animate({"border-top-color": "10px solid #ED2939"}, "fast");
	});
	
	$("#contact").mouseleave(function() {
		$("#contact").animate({color: "#000000"}, "fast");
		$("#content").animate({"border-top-color": "10px solid #000000"}, "fast");
	});
});