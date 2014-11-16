/*
 * Keeps track of which section of the page is currently loaded
 * 0 = Home page
 * 1 = Blog
 * 2 = Resume
 * 3 = Contact
 */
var currentPage = 0; // 0 by default because that is the home page

$(document).ready(function() {
    // fadeIn the initial contents.
    $(".content").animate({opacity: 1}, 200);
    
	/* 
     * Check for desktop.
     * The nav links will only change colour when moused over on a desktop.
     * Nothing will happen to the nav links on mobile.
     * The top border for the #contentContainer div will change colours regardless of platfrom.
     */
	if (!navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
		// Code for Home (Robert Huczek)
		$("#home").mouseenter(function() {
			$("#home").animate({color: "#0080FF"}, 200);
		});
		
		$("#home").mouseleave(function() {
			$("#home").animate({color: "#000000"}, 200);
		});
		
		// Code for Blog
		$("#blog").mouseenter(function() {
			$("#blog").animate({color: "#FFA300"}, 200);
		});
		
		$("#blog").mouseleave(function() {
			$("#blog").animate({color: "#000000"}, 200);
		});
		
		// Code for Resume
		$("#resume").mouseenter(function() {
			$("#resume").animate({color: "#007E1A"}, 200);
		});
		
		$("#resume").mouseleave(function() {
			$("#resume").animate({color: "#000000"}, 200);
		});
		
		// Code for Contact
		$("#contact").mouseenter(function() {
			$("#contact").animate({color: "#ED2939"}, 200);
		});
		
		$("#contact").mouseleave(function() {
			$("#contact").animate({color: "#000000"}, 200);
		});
	}
	
	/* 
     * Click handlers for nav bar links.
     * When a link in the nav bar is clicked
     * it will change the colour of the top content border
     * to the appropriate colour.
     */
    $("#home").click(function() {
        $("#contentContainer").animate({"border-top-color": "10px solid #0080FF"}, {duration: 200, queue: false});
        replaceContent(0);
    });
    
    $("#blog").click(function() {
        $("#contentContainer").animate({"border-top-color": "10px solid #FFA300"}, {duration: 200, queue: false});
        replaceContent(1);
    });
    
    $("#resume").click(function() {
        $("#contentContainer").animate({"border-top-color": "10px solid #007E1A"}, {duration: 200, queue: false});
        replaceContent(2);
    });
    
    $("#contact").click(function() {
        $("#contentContainer").animate({"border-top-color": "10px solid #ED2939"}, {duration: 200, queue: false});
        replaceContent(3);
    });
});

function replaceContent(requestedPage) {
    // if currentPage and requestedPage are equal, then do nothing
    if (currentPage !== requestedPage) {
        /*
         * The reason for fading out .content instead of #contentContainer is because
         * the entire section would fade out, including the coloured top border.
         * By fading out .content the coloured border remains intact.
         * queue: false is used to that animations can happen simultaneously.
         */
        $(".content").animate({opacity: 0}, 100, function() {
            $("#contentContainer").empty();
            
            /*
             * Append the new content
             * The goal is to animate the top border colour change and fade in the new content simultaneously
             * The animation takes 200 milliseconds, that means fadeOut must take 100ms and fadeIn mist be another 100ms.
             * This isn't 100% dead on because of switch and append execution times but good enough for the naked eye.
             */
            switch (requestedPage) {
                case 0: // Home page
                    $("#contentContainer").append("<p class=\"content\">Welcome.</p>");
                    $(".content").animate({opacity: 1}, {duration: 100, queue: false});
                    currentPage = 0;
                    break;
                    
                case 1: // Blog
                    $("#contentContainer").append("<p class=\"content\">Blog.</p>");
                    $(".content").animate({opacity: 1}, {duration: 100, queue: false});
                    currentPage = 1;
                    
                    break;
                
                case 2: // Resume
                    $("#contentContainer").append("<p class=\"content\">Resume.</p>");
                    $(".content").animate({opacity: 1}, {duration: 100, queue: false});
                    currentPage = 2;
                    break;
                
                case 3: // Contact
                    $("#contentContainer").append("<p class=\"content\">Contact.</p>");
                    $(".content").animate({opacity: 1}, {duration: 100, queue: false});
                    currentPage = 3;
                    break;    
            } // end switch
        }); // end callback
    } // end if
} // end replaceContent
