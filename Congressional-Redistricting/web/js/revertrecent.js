var revertable = true;

$(document).ready(function(){
   
   $("#revert-btn").click(function(){
      if(revertable === true){
          $("#change-row-3").css("display", "none");
          $("#revert-btn").attr("disabled", true);
          revertable = false;
      }
   });
    
});