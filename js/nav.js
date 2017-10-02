


var url_variable = location.search;
// function you can use:
function getLanguage(str) {
    return str.split('=')[1];
}
// use the function:
var lang = getLanguage(url_variable);

if (lang == null){
    // your code here.
    var lang = "en"
}


if (page == "project" || page == "portfolio")  {

// for project pages de/en switch & info
var projectname = location.search;
// function you can use:
function getSecondPart(str) {
    return str.split('=')[2];
}

function getLanguage(str) {
    return str.split('=')[1];
}

// use the function:
var slice =getSecondPart(projectname);
var lang = getLanguage(projectname);

// special case for project page
if (page == "project"){
    var p_site = "project"
} else { p_site = "portfolio" }

}
// navigation names for menu
if (lang == "de") {
  var home = "Home"
  var portfolio = "Projekte"
  var about = "Über mich"
  var contact = "Kontakt"
} else {
  var home = "Home"
  var portfolio = "Projects"
  var about = "About"
  var contact = "Contact"
}

document.write(
'<header>'+
'<nav><ul>'+
'<li id="index"><a href="/?='+ lang +'">'+home+'</a></li>'+
'<li id="'+p_site+'"><a href="portfolio?='+ lang +'">'+portfolio+'</a></li>'+
'<li id="about"><a href="about?='+ lang +'">'+about+'</a></li>'+
'<li id="contact"><a href="contact?='+ lang +'">'+contact+'</a></li>'+
'</ul></nav></header>'+


'<div class="languages">'+
'<li id="de"><a href="'+page+'?=de='+slice+'">DE</a></li>'+
'<li id="en"><a href="'+page+'?=en='+slice+'">EN</a></li>'+
'</div>'+
'<body class='+ lang +'>'


);



// active links
document.getElementById(page).classList.add("active");
document.getElementById(lang).classList.add("active2");
