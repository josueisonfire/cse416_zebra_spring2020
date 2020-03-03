var currentStateSelection = "USA"

$(document).ready(function(){
    
    
    $("#dropdown-USA").click(function(){
        $("#dropdown-state-select").text("Select State");
        $("#dropdown-USA").css("display", "none");
        $("#dropdown-"+currentStateSelection).css("display", "block");
        $("#state-info").css("display", "none");
	currentStateSelection = "USA";
    });
    
    $("#dropdown-Georgia").click(function(){
        $("#dropdown-state-select").text("Georgia");
        $("#state-info").css("display", "block");
        $("#dropdown-Georgia").css("display", "none");
        $("#dropdown-"+currentStateSelection).css("display", "block");
        $("#state-info-header").text("Georgia")
	currentStateSelection = "Georgia";
    });
    
    $("#dropdown-Maryland").click(function(){
        $("#dropdown-state-select").text("Maryland");
        $("#state-info").css("display", "block");
        $("#dropdown-Maryland").css("display", "none");
        $("#dropdown-"+currentStateSelection).css("display", "block");
        $("#state-info-header").text("Maryland")
	currentStateSelection = "Maryland";
    });
    
    $("#dropdown-Texas").click(function(){
        $("#dropdown-state-select").text("Texas");
        $("#state-info").css("display", "block");
        $("#dropdown-Texas").css("display", "none");
        $("#dropdown-"+currentStateSelection).css("display", "block");
        $("#state-info-header").text("Texas")
	currentStateSelection = "Texas";
    });
    
});