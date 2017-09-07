


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





document.write(
'<header>'+
'<nav><ul>'+
'<li id="index"><a href="/?='+ lang +'">Home</a></li>'+
'<li id="portfolio"><a href="portfolio?='+ lang +'">Portfolio</a></li>'+
'<li id="about"><a href="about?='+ lang +'">About</a></li>'+
'<li id="contact"><a href="contact?='+ lang +'">Contact</a></li>'+
'</ul></nav></header>'+


'<div class="languages">'+
'<li id="de"><a href="'+page+'?=de">DE</a></li>'+
'<li id="en"><a href="'+page+'?=en">EN</a></li>'+
'</div>'+
'<body class='+ lang +'>'


);



// active links
document.getElementById(page).classList.add("active");
document.getElementById(lang).classList.add("active2");
