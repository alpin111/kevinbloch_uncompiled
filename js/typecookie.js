

var typeit_done_cookie = document.cookie.replace(/(?:(?:^|.*;\s*)typeit_done\s*\=\s*([^;]*).*$)|^.*$/, "$1");


function set_cookie() {
  document.cookie = "typeit_done=true";
}

window.onbeforeunload = function(e) {
    document.cookie = 'cookiename=; expires=' + d.toGMTString() + ';';
};

// create the string variables
var str_1 = "index." + lang + "_1"
var str_2 = "index." + lang + "_2"
var str_3 = "index." + lang + "_3"



if (typeit_done_cookie != 'true') {
$('.type-it').typeIt({
  callback: set_cookie(),
  cursor: false,
  speed: 30,
  strings: [eval(str_1),' ', eval(str_2),' ', eval(str_3)]
});
 }

else {
  document.write(
  '<div class=about>'+eval(str_1)+'<br><br>'+
  eval(str_2)+'<br><br>'+
  eval(str_3)+'</div>'
);
}
