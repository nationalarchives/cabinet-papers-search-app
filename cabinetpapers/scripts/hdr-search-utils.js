/*
 Persistent search and main navigation JavaScript utilities
 Created 19 November 2008 by C Anderson

 28 April 2009: CDA - added functions to clear default text from text fields on rambler guide pages
 */

/*global variables - used by personalisation*/
var xmlHttp;
var defaultLink = "<a href='/mypage/'>MyPage (not signed in)</a>";



function displayDate() {
    // simply generates a date in day:date:month format
    // looks for a header div called hdr-date-display
    // if the above div is found, writes the date to it

    var dateHolder = document.getElementById("hdr-date-display");
    if(dateHolder) {
        var d=new Date();
        var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
        var monthname=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
        var dateString = weekday[d.getDay()] + " " + d.getDate() + " " + monthname[d.getMonth()];

        dateHolder.innerHTML = dateString;
    }
}

function initMenu() {
    // initialise the menu for keyboard access
    // uses ye olde CSS/JavaScript class name change trick
    // when an element receives focus, its class name is changed to make it visible
    var el, li, x;
    el = document.getElementById("main-menu").getElementsByTagName("li");
    for (x in el) {
        li = el[x];

        // add hover functionality for ie6
        // (ie6 only applies :hover pseudoclass to links)
        li.onmouseover = openSubMenu;
        li.onmouseout = closeSubMenu;

        // add focus functionality for ie7
        // (ie7 does not implement addEventListener)
        li.onfocusin = openSubMenu;
        li.onfocusout = closeSubMenu;
        if (li.addEventListener) {  // focus for ff, safari, konquerer, etc.
            li.addEventListener('focus', openSubMenu, true);
            li.addEventListener('blur', closeSubMenu, true);
        }
    }
}

function openSubMenu() {
    // change the class name to force visibility
    this.className = "js-show";
}

function closeSubMenu() {
    if(/\bjs-show\b/.test(this.className))
        this.className = null;
}

function initSearch() {
    var hideSearch = false; // set this to true to hide the search form, or false to show it
    var searchField = document.getElementById("search_text");
    var searchDefaultText = "Search the archives";
    var searchLinkJsEnabled = "/search/advanced_search.aspx?homepage=ad-search&javascriptenabled=True&j=t";
    var searchLink = document.getElementById("hdr-advanced-search");

    if (!hideSearch) {
        // attach default text highlight functionality to persistent search form field
        // (default text is highlighted when user clicks in field)
        if(searchField && searchField.value==searchDefaultText) {
            searchField.onfocus = function() {
                searchField.value="";
            }
        }

        // replaces the default link to Advanced Search
        // default link includes querystring information indicating that JavaScript is disabled
        // this replaces that link with the one specified below (searchLinkJsEnabled)
        // the advanced search application will then know that JavaScript is enabled
        if(searchLink) {
            searchLink.href = searchLinkJsEnabled;
        }
    }
    else {
        var searchForm = document.getElementById("hdr-searchform-holder");
        searchForm.style.display="none";
    }
}

function setActive(linksArray, currentPage) {
    // helper function for setActiveMenuLink()

    for (var i = 0; i < linksArray.length; i++) {
        if (currentPage.indexOf(linksArray[i].href) != -1) {
            linksArray[i].className = "selected";
        }
    }
}

function setActiveMenuLink() {
    // highlights the top level menu item if the top level page is currently being viewed
    // eg. if about/default.htm is viewed, 'About us' remains highlighted on the main menu

    // get the URL of the page currently loaded
    var thisPageURL = document.location.href ? document.location.href : document.location;

    //check if the sub-menu element exists
    if (document.getElementById("sub-menu")) {
        // get all links in sub-menu
        var menuLinksArray = document.getElementById("sub-menu").getElementsByTagName("a");
        setActive(menuLinksArray, thisPageURL);
    }
}

function initPageSearch() {
    // Clears text field default content on focus
    // Works on fields within the main body area
    // Uses function setFieldBehaviour

    // Create arrays of all input elements
    var inputsArray = document.getElementsByTagName("input");

    // for input fields - to clear clicked value
    if(inputsArray) {
        for(var i=0; i<inputsArray.length; i++) {
            // Manipulate only text fields in the main body area of 'rambler guides' pages
            // Exclude the header and catalogue search fields
            if(inputsArray[i].type=="text" && inputsArray[i].className=="clear-on-select") {
                // Extract id attribute from each text field and pass it to the helper function
                var fieldID = inputsArray[i].id;
                setFieldBehaviour(fieldID);
            }
        }
    }
}

function setFieldBehaviour(fid) {
    // Helper function for initPageSearch
    var textField = document.getElementById(fid);

    textField.onfocus = function() {
        textField.value="";
    }
}


function addLoadEvent(func) {
    // executes JavaScript functions after browser window has loaded
    // another copy of this function is used in content-rotate.js
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

addLoadEvent(initSearch);
addLoadEvent(initMenu);
addLoadEvent(displayDate);
addLoadEvent(setActiveMenuLink);
addLoadEvent(initPageSearch);