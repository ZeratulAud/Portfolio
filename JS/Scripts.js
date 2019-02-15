$(".selectable").hover(
      function(){ $(this).addClass('active') },
      function(){ $(this).removeClass('active') }
)

$(".logo").hover(
      function(){ $(this).addClass('activeLogo') },
      function(){ $(this).removeClass('activeLogo') }
)

$(window).resize(function() {
  textSize();
});


function textSize() {
  
  var containers = document.getElementsByClassName("paragraph");
  var textBoxes = document.getElementsByClassName("discription");
  var textBoxes = document.getElementsByClassName("textBox");
  for(i=0; i<textBoxes.length; i++) {
    var img = document.getElementById('carousel'+i); 
    //or however you get a handle to the IMG
    var height = img.clientHeight;
    $(".textBox").css("max-height",height+"px");

  }

}