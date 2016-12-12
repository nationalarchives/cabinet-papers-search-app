$(document).ready(function($){
    //Show/Hide Tabs
    $(".multitab-widget-content-widget-id").hide();
    $("ul.multitab-widget-content-tabs-id li:first a").addClass("multitab-widget-current").show();
    $(".multitab-widget-content-widget-id:first").show();
    $("ul.multitab-widget-content-tabs-id li a").click(function() {
        $("ul.multitab-widget-content-tabs-id li a").removeClass("multitab-widget-current a");
        $(this).addClass("multitab-widget-current");
        $(".multitab-widget-content-widget-id").hide();
        var activeTab = $(this).attr("href");
        $(activeTab).show(); return false; });

    //Checkboxes
    $(this).click(function () {
        if ($("input[data-name='filter[]']").is(':checked')) {
            $('#all').prop('checked',false);
        }
        if ($("input[data-name='filter[]']:checked").length == $("input[data-name='filter[]").length) {
            $('#all').prop('checked',true);
            $("input[data-name='filter[]']").prop('checked',false);
        }
        if ($("input[data-name='filter[]']:checked").length == 0) {
            $('#all').prop('checked',true);
            //$("input[name='filter[]']").prop('checked',false);
        }
        if ($('#all').attr('checked')) {
            $('#all').attr('disabled', false);
        }
        if ($("input[data-name='filter[]']:checked").length <= 1) {
            $("#all").prop("disabled", false);
            //$('#all').prop('checked',false);
        }
        $('#all').change(function(){
            $(this).prop('checked',true);
            $("input[data-name='filter[]']").prop('checked',false);
        });
    });

    $( "ul.multitab-widget" ).addClass( "show" );

    //Binding the fields
    $('#exactwords').bind('keypress keyup blur', function() {
        $('#websearch').val($(this).val());
    });
});