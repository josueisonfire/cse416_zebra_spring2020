$(document).ready(function(){

    $("#error-checkbox-1").change(function(){

        if(this.checked){
            $("#error-row-1").css("background-color", "lightgreen");
        }else{
            $("#error-row-1").css("background-color", "lightgray");
        }
    });
    
    $("#error-checkbox-2").change(function(){

        if(this.checked){
            $("#error-row-2").css("background-color", "lightgreen");
        }else{
            $("#error-row-2").css("background-color", "lightgray");
        }
    });
    
    $("#error-checkbox-3").change(function(){

        if(this.checked){
            $("#error-row-3").css("background-color", "lightgreen");
        }else{
            $("#error-row-3").css("background-color", "lightgray");
        }
    });
    
    $("#error-checkbox-4").change(function(){

        if(this.checked){
            $("#error-row-4").css("background-color", "lightgreen");
        }else{
            $("#error-row-4").css("background-color", "lightgray");
        }
    });
    
    $("#error-checkbox-5").change(function(){

        if(this.checked){
            $("#error-row-5").css("background-color", "lightgreen");
        }else{
            $("#error-row-5").css("background-color", "lightgray");
        }
    });

});