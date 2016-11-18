/*
 * jQuery 1.2.3 - New Wave Javascript
 *
 * Copyright (c) 2008 John Resig (jquery.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * $Date: 2008-02-06 00:21:25 -0500 (Wed, 06 Feb 2008) $
 * $Rev: 4663 $
 */
/* --------- COLLAPSABLE BLOCKS FOR CABINET PAPERS - THEME OVERVIEW ---------- */
$(document).ready(function(){
    
    //$(".accordion h4:first").addClass("active");
    $(".accordion div").hide();
    $(".accordion h4").click(function(){
        $(this).next("div").slideToggle("slow")
        .siblings("div:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings("h4").removeClass("active");
    });
});

/* --------- HOVER EFFECT ON TOOLS MENU ---------- */
$(document).ready(function(){
                           
    $(".tools-links a").append("<em></em>");
    
    $(".tools-links a").hover(function() {
        $(this).find("em").animate({opacity: "show", top: "-60"}, "fast");
        var hoverText = $(this).attr("title");
        $(this).find("em").text(hoverText);
    }, function() {
        $(this).find("em").animate({opacity: "hide", top: "-70"}, "fast");
    });

});
 

/* --------- COLLAPSABLE BLOCKS FOR SITEMAP ---------- */
$(document).ready(function(){
    
    //$(".accordion-sitemap p:first").addClass("active");
    $(".accordion-sitemap div").hide();
    $(".accordion-sitemap p").click(function(){
        $(this).next("div").slideToggle("slow")
        .siblings("div:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings("p").removeClass("active");
    });
});