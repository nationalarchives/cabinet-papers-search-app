/***********************************
    MAIN
***********************************/
var Open = "";
var Closed = "";
/***********************************
    FUNCTIONS
***********************************/
function Init()
    {
    if (document.images)
        {
        Open = new Image();
        Closed = new Image();
        Open.src = "/images/buttons/closeinfo.gif";
        Closed.src = "/images/buttons/moreinfo.gif";
        }
        DisplayAllInformation(false)
    }
function DisplayAllInformation(blnDisplay)
{
 if (blnDisplay)
 {
  var strDisplayParam = '';
  var strSrc = Open.src;
 }
 else
 {
  var strDisplayParam = 'none';
  var strSrc = Closed.src;
 }
 //set page display
 if (document.getElementsByTagName)
 {
  var x = document.getElementsByTagName('div');
  for (var i=0;i<x.length;i++)
  {
   if(x[i].id.indexOf('info')>-1)
   {
    x[i].style.display=strDisplayParam;
   }
  }
  var x = document.getElementsByTagName('img');
  for (var i=0;i<x.length;i++)
  {
   if(x[i].id.indexOf('image')>-1)
   {
    x[i].width='72';
    x[i].height='24';
    x[i].src=strSrc;
   }
  }
 }
 else if (document.all)
 {
  for (var e in document.all)
  {
   if(e.indexOf('info')>-1)
   {
    document.all(e).style.display=strDisplayParam;
   }
   if(e.indexOf('image')>-1)
   {
    document.all(e).width='72';
    document.all(e).height='24';
    document.all(e).src=strSrc;
   }
  }
 }
 else if (document.layers)
 {
  /*
   NETSCAPE 4.7 - Do nothing. Leave all info open.
   Would require using absolute positioning
   on divs. Not an option for this site
   as not architectured this way.      
  */
 }
}
function BrowserCheck()
    {
    if (document.layers) //if Netscape 4 
        {
        return false;
        }
    return true;
    }
function ShowHide(strDivName, strCurrentImageName)
    {
    if (BrowserCheck())
        {
        var objCurrentDiv, objCurrentImage;
        if (document.getElementById)
            {
            currentdiv = document.getElementById(strDivName);
            currentimage = document.getElementById(strCurrentImageName);
            }
        if (document.all)
            {
            currentdiv = document.all(strDivName);
            currentimage = document.all(strCurrentImageName);
            }
        if (currentdiv.style.display == 'none')
            {
            currentdiv.style.display = '';
            currentimage.src = Open.src;
            }
        else
            {
            currentdiv.style.display = 'none';
            currentimage.src = Closed.src;
            }
        }
    }
function isSupported(){
  if(document.all || document.getElementByID){
   return true;
  }
  return false;
}
function PRO_openPopupWindow(theURL, winName, intWidth, intHeight, features, centralise) {
 features = features + ",width=" + intWidth + ",height=" + intHeight;
 if (centralise == "yes") {
  var intAvailWidth = 640, intAvailHeight = 480;
  var intMargin = 10;
  var intTop = intMargin, intLeft = intMargin;
  if (typeof(screen) == "object") {
   intAvailWidth = screen.availWidth;
   intAvailHeight = screen.availHeight;
  }
  intTop = Math.round(intAvailHeight/2 - intHeight/2);
  if (intTop < intMargin) intTop = intMargin;
  intLeft = Math.round(intAvailWidth/2 - intWidth/2);
  if (intLeft < intMargin) intLeft = intMargin;
  features = features + ",left=" + intLeft + ",top=" + intTop;
 }
 
  var newWin = window.open(theURL,winName,features);
  if (newWin.focus) newWin.focus();
  document.MM_returnValue = false;
}
//---------------------------------------------------------
function PRO_displayInMainWindow(theURL, closeThis) {
 var thisWindow = window;
 if (thisWindow.opener) {
  thisWindow.opener.location.href = theURL;
  thisWindow.opener.focus();
  if (closeThis) {
   thisWindow.close();
  }
 } else {
  thisWindow.location.href = theURL;
 }
 document.MM_returnValue = false;
}
//---------------------------------------------------------
function closeWindow() {
 self.close();
}