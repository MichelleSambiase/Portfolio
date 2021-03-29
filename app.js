var intervalo;

AOS.init();
//antes media segundo parrafo 962, 965
// A $( document ).ready() block.
$(document).ready(function () {
  if (window.innerWidth >= 1400) {
    maquinaDeEscribir(152, 962);
  }
  if (window.innerWidth >= 1200 && window.innerWidth <= 1399) {
    maquinaDeEscribir(152, 768);
  }
  if (window.innerWidth >= 992 && window.innerWidth <= 1199) {
    maquinaDeEscribir(152, 927);
  }
  if (window.innerWidth <= 992 && window.innerWidth >= 768) {
    maquinaDeEscribir(152, 639);
  }
  if (window.innerWidth <= 768 && window.innerWidth >= 500) {
    maquinaDeEscribir(152, 639);
  }

  if (window.innerWidth <= 500) {
    maquinaDeEscribir(84);
  }
});

$(".skill-percent").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-percent"),
    },
    "fast"
  );
});

function maquinaDeEscribir(width, parrafoDosWidth) {
  var element = document.getElementById("saludo");
  intervalo = setInterval(function () {
    //debugger;
    if (element.clientWidth == width) {
      element.classList.remove("linea");
      segundoParrafo(parrafoDosWidth);
    }
  }, 1000);
}

function segundoParrafo(width) {
  clearInterval(intervalo);
  var tercerParrafo = document.getElementById("metasDos");
  var elemento = document.getElementById("metas");
  elemento.classList.add("linea");
  elemento.classList.add("mostrarMeta");
  intervalo = setInterval(function () {
    // debugger;
    if (elemento.clientWidth == width) {
      elemento.classList.remove("linea");
      tercerParrafo.classList.add("linea");
      tercerParrafo.classList.add("mostrarMetaTres");
      clearInterval(intervalo);
    }
  }, 1000);
}

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  //debugger;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function () {
  $(this).scroll(function () {
    var $winheight = $(window).height(); // 651 get height of window
    var $winPos = $(document).scrollTop() + $winheight - 600; // get postion of scroll bar then add the window height and subtrack 50px, creating position 50 px above the bottom of the screen.
    $("img").each(function () {
      // do this for each image
      var $pos = $(this).offset().top; //get the position for image
      if ($winPos > $pos) {
        // if the image is above the winPos do this
        $(this).addClass("animate");
      } else {
        // remove else if you want animation to happen once.
        $(this).removeClass("animate");
      }
    });
    if ($(document).scrollTop() >= 989) {
      $(".arrows").addClass("disapear");
    } else {
      $(".arrows").removeClass("disapear");
    }
  });
});

/*funcion para la card de cursos*/
document.querySelector(".card-box").onclick = function (e) {
  const head = e.currentTarget;
  head.classList.toggle("active");
};

document.querySelector(".card-box-digitalers").onclick = function (e) {
  const head = e.currentTarget;
  head.classList.toggle("active");
};

$(document).ready(function () {
  //   Create a function
  $(".arrows").click(function () {
    //       Select the body of the page and scroll down by 650 pixels worth
    $("html, body").animate({ scrollTop: "+=989px" }, 989);
  });
});

/*como encapsular toda la funcion para que tenga menos codigo.*/
