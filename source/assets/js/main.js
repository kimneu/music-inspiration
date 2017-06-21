// @codekit-prepend "../../../bower_components/jquery/dist/jquery.js", "../../../bower_components/tether/dist/js/tether.js", "../../../bower_components/bootstrap/dist/js/bootstrap.js";


$('#level_0-button').click(function() {
  // console.log('YES.. Lets go');
  $.ajax({
    url: 'assets/ajax/level1.php',
    dataType: 'html',
    method: 'GET',
    data: '',
    success: function(retdata) {
      $('#ajax').html(retdata);
    }
  });
});


// Strip-Down YT-URL Script from here: https://gist.github.com/takien/4077195
function YouTubeGetID(url){
  var ID = '';
  url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  }
  else {
    ID = url;
  }
    return ID;
}

var url = "";
var id = YouTubeGetID(url);
// console.log(id);


// Build iFrame
function Createiframe(id) {
  var element = document.getElementById('videoWrapper');
  var iframe = document.createElement('iframe');
  // var node = document.createTextNode('asdf');
  // iframe.appendChild(node);
  element.appendChild(iframe);
  iframe.setAttribute("width","auto");
  iframe.setAttribute("height","auto");
  iframe.setAttribute("src","https://www.youtube.com/embed/" + id);
  iframe.setAttribute("frameborder","0");
  iframe.setAttribute("allowfullscreen","");
}

Createiframe(id);
