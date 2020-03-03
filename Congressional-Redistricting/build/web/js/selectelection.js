var currentElectionSelection = "2016Pres";

$(document).ready(function(){

    
    $("#election-dropdown-2016").click(function(){
        $("#election-dropdown-2016").css("display", "none");
        $("#election-dropdown-2012").css("display", "block");
        $("#election-select-dropdown").text("2016 Presidential Election");
    });
    
    $("#election-dropdown-2012").click(function(){
        $("#election-dropdown-2012").css("display", "none");
        $("#election-dropdown-2016").css("display", "block");
        $("#election-select-dropdown").text("2012 Presidential Election");
    });
    
    
});