var currentStateInfoSelection = "voting";

$(document).ready(function(){

    
    $("#state-dropdown-voting").click(function(){
        $("#state-dropdown-voting").css("display", "none");
        $("#state-info-dropdown").text("Voting Data");
        $("#state-voting-text").css("display", "block");
        $("#state-dropdown-" + currentStateInfoSelection).css("display", "block");
        $("#state-" + currentStateInfoSelection + "-text").css("display", "none");
        currentStateInfoSelection = "voting";
    });


    $("#state-dropdown-demographic").click(function(){
        $("#state-dropdown-demographic").css("display", "none");
        $("#state-info-dropdown").text("Demographic Data");
        $("#state-demographic-text").css("display", "block");
        $("#state-dropdown-" + currentStateInfoSelection).css("display", "block");
        $("#state-" + currentStateInfoSelection +"-text").css("display", "none");
        currentStateInfoSelection = "demographic";
    });
    
    
    $("#state-dropdown-error").click(function(){
        $("#state-dropdown-error").css("display", "none");
        $("#state-info-dropdown").text("Error Data");
        $("#state-error-text").css("display", "block");
        $("#state-dropdown-" + currentStateInfoSelection).css("display", "block");
        $("#state-" + currentStateInfoSelection + "-text").css("display", "none");
        currentStateInfoSelection = "error";
    });
    
});