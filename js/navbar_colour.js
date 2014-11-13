$(document).ready(function() {
	/* 
     * Check for desktop.
     * The nav links will only change colour when moused over on a desktop.
     * Nothing will happen to the nav links on mobile.
     * The top border for the #contentContainer div will change colours regardless of platfrom.
     */
	if (!navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
		//Code for Home (Robert Huczek)
		$("#home").mouseenter(function() {
			$("#home").animate({color: "#0080FF"}, "fast");
		});
		
		$("#home").mouseleave(function() {
			$("#home").animate({color: "#000000"}, "fast");
		});
		
		//Code for Blog
		$("#blog").mouseenter(function() {
			$("#blog").animate({color: "#FFA300"}, "fast");
		});
		
		$("#blog").mouseleave(function() {
			$("#blog").animate({color: "#000000"}, "fast");
		});
		
		//Code for Resume
		$("#resume").mouseenter(function() {
			$("#resume").animate({color: "#007E1A"}, "fast");
		});
		
		$("#resume").mouseleave(function() {
			$("#resume").animate({color: "#000000"}, "fast");
		});
		
		//Code for Contact
		$("#contact").mouseenter(function() {
			$("#contact").animate({color: "#ED2939"}, "fast");
		});
		
		$("#contact").mouseleave(function() {
			$("#contact").animate({color: "#000000"}, "fast");
		});
	}
	
	/* 
     * Click handlers for nav bar links.
     * When a link in the nav bar is clicked
     * it will change the colour of the top content border
     * to the appropriate colour.
     */
    $("#home").click(function() {
        $("#contentContainer").animate({"border-top-color": "10px solid #0080FF"}, "fast");
    });
    
    $("#blog").click(function() {
        $("#contentContainer").animate({"border-top-color": "10px solid #FFA300"}, "fast");  
    });
    
    $("#resume").click(function() {
        $("#contentContainer").animate({"border-top-color": "10px solid #007E1A"}, "fast");
    });
    
    $("#contact").click(function() {
        $("#contentContainer").animate({"border-top-color": "10px solid #ED2939"}, "fast");      
    });
});
