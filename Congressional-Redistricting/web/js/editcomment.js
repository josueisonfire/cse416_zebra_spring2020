var currentlyCommenting = false;

$(document).ready(function(){
    
    $("#comment-btn-1").click(function(){
       if(currentlyCommenting === false){ 
            /*Display text area*/ 
            $("#error-comment-1").css("display", "block");
            /*Toggle Buttons*/
            toggle_comment_btns(true);
            /*Update current Comment BTN*/
            $("#comment-btn-1").text("Save");
            $("#comment-btn-1").attr("disabled", false);
            currentlyCommenting = true;
        }else{
            /*Hide text area*/ 
            $("#error-comment-1").css("display", "none");
            /*Toggle Buttons*/
            toggle_comment_btns(false);
            /*Update current Comment BTN*/
            $("#comment-btn-1").text("Edit");
            $("#comment-btn-1").attr("disabled", false);
            currentlyCommenting = false;
        }
        
    });
    
        $("#comment-btn-2").click(function(){
       if(currentlyCommenting === false){ 
            /*Display text area*/ 
            $("#error-comment-2").css("display", "block");
            /*Toggle Buttons*/
            toggle_comment_btns(true);
            /*Update current Comment BTN*/
            $("#comment-btn-2").text("Save");
            $("#comment-btn-2").attr("disabled", false);
            currentlyCommenting = true;
        }else{
            /*Hide text area*/ 
            $("#error-comment-2").css("display", "none");
            /*Toggle Buttons*/
            toggle_comment_btns(false);
            /*Update current Comment BTN*/
            $("#comment-btn-2").text("Edit");
            $("#comment-btn-2").attr("disabled", false);
            currentlyCommenting = false;
        }
        
    });
    
    
        $("#comment-btn-3").click(function(){
       if(currentlyCommenting === false){ 
            /*Display text area*/ 
            $("#error-comment-3").css("display", "block");
            /*Toggle Buttons*/
            toggle_comment_btns(true);
            /*Update current Comment BTN*/
            $("#comment-btn-3").text("Save");
            $("#comment-btn-3").attr("disabled", false);
            currentlyCommenting = true;
        }else{
            /*Hide text area*/ 
            $("#error-comment-3").css("display", "none");
            /*Toggle Buttons*/
            toggle_comment_btns(false);
            /*Update current Comment BTN*/
            $("#comment-btn-3").text("Edit");
            $("#comment-btn-3").attr("disabled", false);
            currentlyCommenting = false;
        }
        
    });
    
    
        $("#comment-btn-4").click(function(){
       if(currentlyCommenting === false){ 
            /*Display text area*/ 
            $("#error-comment-4").css("display", "block");
            /*Toggle Buttons*/
            toggle_comment_btns(true);
            /*Update current Comment BTN*/
            $("#comment-btn-4").text("Save");
            $("#comment-btn-4").attr("disabled", false);
            currentlyCommenting = true;
        }else{
            /*Hide text area*/ 
            $("#error-comment-4").css("display", "none");
            /*Toggle Buttons*/
            toggle_comment_btns(false);
            /*Update current Comment BTN*/
            $("#comment-btn-4").text("Edit");
            $("#comment-btn-4").attr("disabled", false);
            currentlyCommenting = false;
        }
        
    });
    
    
        $("#comment-btn-5").click(function(){
       if(currentlyCommenting === false){ 
            /*Display text area*/ 
            $("#error-comment-5").css("display", "block");
            /*Toggle Buttons*/
            toggle_comment_btns(true);
            /*Update current Comment BTN*/
            $("#comment-btn-5").text("Save");
            $("#comment-btn-5").attr("disabled", false);
            currentlyCommenting = true;
        }else{
            /*Hide text area*/ 
            $("#error-comment-5").css("display", "none");
            /*Toggle Buttons*/
            toggle_comment_btns(false);
            /*Update current Comment BTN*/
            $("#comment-btn-5").text("Edit");
            $("#comment-btn-5").attr("disabled", false);
            currentlyCommenting = false;
        }
        
    });
    
    function toggle_comment_btns(setToValue){
        $("#comment-btn-1").attr("disabled", setToValue);
        $("#comment-btn-2").attr("disabled", setToValue);
        $("#comment-btn-3").attr("disabled", setToValue);
        $("#comment-btn-4").attr("disabled", setToValue);
        $("#comment-btn-5").attr("disabled", setToValue);

        
    }
    
});