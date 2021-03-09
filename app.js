var intervalo;

$(".skill-percent").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-percent"),
    },
    "fast"
  );
});

(function(){
  var element = document.getElementById('saludo');
  intervalo = setInterval(function(){
    if((element.clientWidth)==152) {    
      element.classList.remove('linea');
     
      segundoParrafo();
    }
  }, 1000)
}());


function segundoParrafo(){
  clearInterval(intervalo)
  var tercerParrafo = document.getElementById('metasDos')
  var elemento = document.getElementById('metas')
  elemento.classList.add('linea')
  elemento.classList.add("mostrarMeta")
  intervalo = setInterval(function(){
    if((elemento.clientWidth)==927){
      elemento.classList.remove("linea");
      tercerParrafo.classList.add('linea')
      tercerParrafo.classList.add('mostrarMetaTres')
      clearInterval(intervalo)
    }
  }, 1000)

}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


 // AOS.init();

  var logoElement = $('footer .logo');

$(window).scroll(function() {
  
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
     
       $(logoElement).addClass('show');
     
   } else if($(logoElement).hasClass('show') && $(window).scrollTop() + $(window).height() > $(document).height() - 150) {
     
      $(logoElement).removeClass('show');
     
   }
});

$(document).ready(function(){
	$(this).scroll(function(){
		var $winheight = $(window).height();// 493 get height of window
		var $winPos = $(document).scrollTop() + $winheight - 743;// get postion of scroll bar then add the window height and subtrack 50px, creating position 50 px above the bottom of the screen.
			$('img').each(function(){ // do this for each image
				var $pos = $(this).offset().top; //get the position for image
				if ($winPos > $pos){ // if the image is above the winPos do this
					$(this).addClass('animate');
         
				}
				else {// remove else if you want animation to happen once. 
					$(this).removeClass('animate');
				}
			
			});
		});
});




