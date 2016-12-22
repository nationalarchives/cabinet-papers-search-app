// Script file contains one object that namespaces one method. This method's purpose is to set up the behaviours associated with Global Search. A call to the method is then placed in a $(document).ready() block.
// This pattern has been chosen so as to facilitate easy migration of this functionality into a single library of JavaScript functions for TNA.

var tna_globalSearch = {
    setUpGlobalSearchToggler: function(passedObject){
        var toggler, togglee, clickedOption, clickedOptionTarget, form, input;
        togglee = $(passedObject.togglee);
        toggler = $(passedObject.toggler);
        input = $(passedObject.input)
        form = $(passedObject.form);
        toggler.addClass('collapsed');
        toggler.removeClass('noJavaScript');
        toggler.bind('click', function(event){
            tna_globalSearch.doToggle(passedObject, event);
        });
        clickedOption = $(passedObject.clickedOption);
        clickedOptionTarget = $(passedObject.clickedOptionTarget);
        clickedOption.bind('click', function(event){
            clickedOptionTarget.text($(this).text());
            tna_globalSearch.doToggle(passedObject, event);
        });
        form.bind('submit', function(){
            var testString = toggler.text();
            if(testString.indexOf("records") > 0){
                $('<input>',{
                    id: "query",
                    name: "_q",
                    css: {
                        'display': 'none'
                    }
                }).val($('#tnaSearch').val()).appendTo(form);
                $(this).attr('action','http://discovery.nationalarchives.gov.uk/SearchUI/s/res');
            } else {
                if(testString.indexOf("website") > 0){
                    $(this).attr('action','/search/results');
                }
            }
        });
        input.bind('focus', function(e){
            tna_globalSearch.doToggle(passedObject);
        });
    },
    doToggle: function(passedObject){
        var toggler, togglee, clickedOption, clickedOptionTarget, form, input;
        togglee = $(passedObject.togglee);
        toggler = $(passedObject.toggler);
        input = $(passedObject.input)
        form = $(passedObject.form);
        togglee.toggle();
        toggler.toggleClass('expanded').toggleClass('collapsed');
    }
};

//  3.  Initiation code
$(document).ready(function(){
    tna_globalSearch.setUpGlobalSearchToggler({'toggler':'#searchOptionToggler','togglee':'#searchFormOptions','clickedOption':'#searchOptions li', 'clickedOptionTarget': '#searchOptionToggler', 'form': '#tnaSearchWrapper form', 'input': '#tnaSearch' });

});