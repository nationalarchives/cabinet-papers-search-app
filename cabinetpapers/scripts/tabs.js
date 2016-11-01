$(document).ready(function(){
    $('#all').click(function(){
        if($(this).prop("checked") == true){
            $(this).siblings('input[type=checkbox]').prop('checked', false);
        }
        else if ($(this).prop("checked") == true) {
            // if is NOT checked then check it liek checked="true"
            $(this).siblings('input[type=checkbox]').prop('checked', true);
        }
    });
});