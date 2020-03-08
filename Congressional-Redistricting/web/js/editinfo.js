var currentlyEditing = false;

$(document).ready(function(){
    
    $("#edit-democratic-btn").click(function(){
        if(currentlyEditing === false){
            /*Make Element Editable and highlighted*/
            $("#raw-democratic-num").prop("contenteditable", "true");
            $("#raw-democratic-num").css("background-color", "darkgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(true);
            /*Update Edit to save btn and reenable*/
            $("#edit-democratic-btn").text("Save");
            $("#edit-democratic-btn").attr("disabled", false);
            currentlyEditing = true;
        }else{
            /*Make Element Uneditable and unhighlighted*/
            $("#raw-democratic-num").prop("contenteditable", "false");
            $("#raw-democratic-num").css("background-color", "lightgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(false);
            /*Update Edit to save btn and reenable*/
            $("#edit-democratic-btn").text("Edit");
            $("#edit-democratic-btn").attr("disabled", false);
            currentlyEditing = false;
        }
    });
    
    $("#edit-republican-btn").click(function(){
        if(currentlyEditing === false){
            /*Make Element Editable and highlighted*/
            $("#raw-republican-num").prop("contenteditable", "true");
            $("#raw-republican-num").css("background-color", "darkgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(true);
            /*Update Edit to save btn and reenable*/
            $("#edit-republican-btn").text("Save");
            $("#edit-republican-btn").attr("disabled", false);
            currentlyEditing = true;
        }else{
            /*Make Element Uneditable and unhighlighted*/
            $("#raw-republican-num").prop("contenteditable", "false");
            $("#raw-republican-num").css("background-color", "lightgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(false);
            /*Update Edit to save btn and reenable*/
            $("#edit-republican-btn").text("Edit");
            $("#edit-republican-btn").attr("disabled", false);
            currentlyEditing = false;
        }
    });
    
    
    $("#edit-thirdparty-btn").click(function(){
        if(currentlyEditing === false){
            /*Make Element Editable and highlighted*/
            $("#raw-thirdparty-num").prop("contenteditable", "true");
            $("#raw-thirdparty-num").css("background-color", "darkgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(true);
            /*Update Edit to save btn and reenable*/
            $("#edit-thirdparty-btn").text("Save");
            $("#edit-thirdparty-btn").attr("disabled", false);
            currentlyEditing = true;
        }else{
            /*Make Element Uneditable and unhighlighted*/
            $("#raw-thirdparty-num").prop("contenteditable", "false");
            $("#raw-thirdparty-num").css("background-color", "lightgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(false);
            /*Update Edit to save btn and reenable*/
            $("#edit-thirdparty-btn").text("Edit");
            $("#edit-thirdparty-btn").attr("disabled", false);
            currentlyEditing = false;
        }
    });
    
    
    $("#edit-africanamerican-btn").click(function(){
        if(currentlyEditing === false){
            /*Make Element Editable and highlighted*/
            $("#raw-africanamerican-num").prop("contenteditable", "true");
            $("#raw-africanamerican-num").css("background-color", "darkgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(true);
            /*Update Edit to save btn and reenable*/
            $("#edit-africanamerican-btn").text("Save");
            $("#edit-africanamerican-btn").attr("disabled", false);
            currentlyEditing = true;
        }else{
            /*Make Element Uneditable and unhighlighted*/
            $("#raw-africanamerican-num").prop("contenteditable", "false");
            $("#raw-africanamerican-num").css("background-color", "lightgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(false);
            /*Update Edit to save btn and reenable*/
            $("#edit-africanamerican-btn").text("Edit");
            $("#edit-africanamerican-btn").attr("disabled", false);
            currentlyEditing = false;
        }
    });
    
    $("#edit-asian-btn").click(function(){
        if(currentlyEditing === false){
            /*Make Element Editable and highlighted*/
            $("#raw-asian-num").prop("contenteditable", "true");
            $("#raw-asian-num").css("background-color", "darkgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(true);
            /*Update Edit to save btn and reenable*/
            $("#edit-asian-btn").text("Save");
            $("#edit-asian-btn").attr("disabled", false);
            currentlyEditing = true;
        }else{
            /*Make Element Uneditable and unhighlighted*/
            $("#raw-asian-num").prop("contenteditable", "false");
            $("#raw-asian-num").css("background-color", "lightgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(false);
            /*Update Edit to save btn and reenable*/
            $("#edit-asian-btn").text("Edit");
            $("#edit-asian-btn").attr("disabled", false);
            currentlyEditing = false;
        }
    });
    
    $("#edit-hispanic-btn").click(function(){
        if(currentlyEditing === false){
            /*Make Element Editable and highlighted*/
            $("#raw-hispanic-num").prop("contenteditable", "true");
            $("#raw-hispanic-num").css("background-color", "darkgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(true);
            /*Update Edit to save btn and reenable*/
            $("#edit-hispanic-btn").text("Save");
            $("#edit-hispanic-btn").attr("disabled", false);
            currentlyEditing = true;
        }else{
            /*Make Element Uneditable and unhighlighted*/
            $("#raw-hispanic-num").prop("contenteditable", "false");
            $("#raw-hispanic-num").css("background-color", "lightgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(false);
            /*Update Edit to save btn and reenable*/
            $("#edit-hispanic-btn").text("Edit");
            $("#edit-hispanic-btn").attr("disabled", false);
            currentlyEditing = false;
        }
    });
    
    
    
    $("#edit-nativeamerican-btn").click(function(){
        if(currentlyEditing === false){
            /*Make Element Editable and highlighted*/
            $("#raw-nativeamerican-num").prop("contenteditable", "true");
            $("#raw-nativeamerican-num").css("background-color", "darkgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(true);
            /*Update Edit to save btn and reenable*/
            $("#edit-nativeamerican-btn").text("Save");
            $("#edit-nativeamerican-btn").attr("disabled", false);
            currentlyEditing = true;
        }else{
            /*Make Element Uneditable and unhighlighted*/
            $("#raw-nativeamerican-num").prop("contenteditable", "false");
            $("#raw-nativeamerican-num").css("background-color", "lightgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(false);
            /*Update Edit to save btn and reenable*/
            $("#edit-nativeamerican-btn").text("Edit");
            $("#edit-nativeamerican-btn").attr("disabled", false);
            currentlyEditing = false;
        }
    });
    
    $("#edit-white-btn").click(function(){
        if(currentlyEditing === false){
            /*Make Element Editable and highlighted*/
            $("#raw-white-num").prop("contenteditable", "true");
            $("#raw-white-num").css("background-color", "darkgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(true);
            /*Update Edit to save btn and reenable*/
            $("#edit-white-btn").text("Save");
            $("#edit-white-btn").attr("disabled", false);
            currentlyEditing = true;
        }else{
            /*Make Element Uneditable and unhighlighted*/
            $("#raw-white-num").prop("contenteditable", "false");
            $("#raw-white-num").css("background-color", "lightgray");
            /*Toggle Other buttons*/
            toggle_edit_btns(false);
            /*Update Edit to save btn and reenable*/
            $("#edit-white-btn").text("Edit");
            $("#edit-white-btn").attr("disabled", false);
            currentlyEditing = false;
        }
    });
    
    
    function toggle_edit_btns(setToValue){
        $("#edit-democratic-btn").attr("disabled", setToValue);
        $("#edit-democratic-btn").attr("disabled", setToValue);
        
        $("#edit-republican-btn").attr("disabled", setToValue);
        $("#edit-republican-btn").attr("disabled", setToValue);
        
        $("#edit-thirdparty-btn").attr("disabled", setToValue);
        $("#edit-thirdparty-btn").attr("disabled", setToValue);
        
        $("#edit-africanamerican-btn").attr("disabled", setToValue);
        $("#edit-africanamerican-btn").attr("disabled", setToValue);
        
        $("#edit-asian-btn").attr("disabled", setToValue);
        $("#edit-asian-btn").attr("disabled", setToValue);
        
        $("#edit-hispanic-btn").attr("disabled", setToValue);
        $("#edit-hispanic-btn").attr("disabled", setToValue);
        
        $("#edit-nativeamerican-btn").attr("disabled", setToValue);
        $("#edit-nativeamerican-btn").attr("disabled", setToValue);
        
        $("#edit-white-btn").attr("disabled", setToValue);
        $("#edit-white-btn").attr("disabled", setToValue);
    };
});
