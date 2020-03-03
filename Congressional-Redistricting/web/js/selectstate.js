var currentSelection = "fullMap"

$(document).ready(function(){
    
    
    $("#dropdown-USA").click(function(){
        $("#dropdown-state-select").text("Select State");
        $("#state-info").css("display", "none");
	currentSelection = "fullMap";
    });
    
    $("#dropdown-Georgia").click(function(){
        $("#dropdown-state-select").text("Georgia");
        $("#state-info").css("display", "inline");
	currentSelection = "GA";
    });
    
    $("#dropdown-Maryland").click(function(){
        $("#dropdown-state-select").text("Maryland");
        $("#state-info").css("display", "inline");
	currentSelection = "MD";
    });
    
    $("#dropdown-Texas").click(function(){
        $("#dropdown-state-select").text("Texas");
        $("#state-info").css("display", "inline");
	currentSelection = "TX";
    });
    
});