var currentPrecintInfoSelection = "voting";

$(document).ready(function(){
    
   $("#precint-voting-btn").click(function(){
        $("#precint-" + currentPrecintInfoSelection + "-tab").css("display", "none");
        $("#precint-" + currentPrecintInfoSelection + "-btn").css("background-color", "darkgray");
        $("#precint-" + currentPrecintInfoSelection + "-btn").css("color", "black");
        $("#precint-voting-tab").css("display", "block");
        $("#precint-voting-btn").css("background-color", "dimgray");
        $("#precint-voting-btn").css("color", "white");
        currentPrecintInfoSelection = "voting";
   });

    $("#precint-demographic-btn").click(function(){
        $("#precint-" + currentPrecintInfoSelection + "-tab").css("display", "none");
        $("#precint-" + currentPrecintInfoSelection + "-btn").css("background-color", "darkgray");
        $("#precint-" + currentPrecintInfoSelection + "-btn").css("color", "black");
        $("#precint-demographic-tab").css("display", "block");
        $("#precint-demographic-btn").css("background-color", "dimgray");
        $("#precint-demographic-btn").css("color", "white");
        currentPrecintInfoSelection = "demographic";
   });
   
   
    $("#precint-comments-btn").click(function(){
        $("#precint-" + currentPrecintInfoSelection + "-tab").css("display", "none");
        $("#precint-" + currentPrecintInfoSelection + "-btn").css("background-color", "darkgray");
        $("#precint-" + currentPrecintInfoSelection + "-btn").css("color", "black");
        $("#precint-comments-tab").css("display", "block");
        $("#precint-comments-btn").css("background-color", "dimgray");
        $("#precint-comments-btn").css("color", "white");
        currentPrecintInfoSelection = "comments";
   });
    
});