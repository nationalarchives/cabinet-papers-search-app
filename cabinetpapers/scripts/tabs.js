$(document).ready(function(){
    $(this).click(function () {
        if ($('#all').attr('checked')) {
            $('#all').attr('disabled', true);
        }
        if ($("input[name='filter[]']").is(':checked')) {
            $('#all').prop('checked',false);
        }
        if ($("input[name='filter[]']:checked").length == $("input[name='filter[]").length) {
            $('#all').prop('checked',true);
            $("input[name='filter[]']").prop('checked',false);
        }
        if ($("input[name='filter[]']:checked").length == 0) {
            $('#all').prop('checked',true);
            //$("input[name='filter[]']").prop('checked',false);
        }
        if ($('#all').attr('checked')) {
            $('#all').attr('disabled', false);
        }
    });
});