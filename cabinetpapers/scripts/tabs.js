$(document).ready(function(){
    $(this).click(function () {
        if ($("input[name='filter[]']").is(':checked')) {
            $('#all').prop('checked',false);
        }
        if ($("input[name='filter[]']:checked").length == $("input[name='filter[]").length) {
            $('#all').prop('checked',true);
            $("input[name='filter[]']").prop('checked',false);
        }
    });
});