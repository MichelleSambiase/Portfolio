var intervalo;

AOS.init();

$(document).ready(function () {
  $("#buttonENG").on('click', function (event) {
    (function () {
      $("[data-translate]").jqTranslate('language', {
        defaultLang: 'es', forceLang: "en",
        asyncLangLoad: false
      });
    })();
    if (window.innerWidth >= 1400) {
      maquinaDeEscribir(125, 777);

    }
    if (window.innerWidth >= 1201 && window.innerWidth <= 1399) {
      maquinaDeEscribir(125, 777);
    }
    if (window.innerWidth >= 1025 && window.innerWidth <= 1200) {
      maquinaDeEscribir(152, 954);
    }
    if (window.innerWidth >= 992 && window.innerWidth <= 1024) {
      maquinaDeEscribir(129, 777);
    }
  })
});

$("#buttonES").on('click', function (event) {
  (function () {
    $("[data-translate]").jqTranslate('language', {
      defaultLang: 'en', forceLang: "es",
      asyncLangLoad: false
    });
  })();
});





$(document).ready(function () {
  if (window.innerWidth >= 1400) {
    maquinaDeEscribir(122, 755);
  }
  if (window.innerWidth >= 1201 && window.innerWidth <= 1399) {
    maquinaDeEscribir(122, 755);
  }
  if (window.innerWidth >= 1025 && window.innerWidth <= 1200) {
    maquinaDeEscribir(152, 927);
  }
  if (window.innerWidth >= 992 && window.innerWidth <= 1024) {
    maquinaDeEscribir(124, 755);
  }
  /*Tablet*/
  if (window.innerWidth <= 991 && window.innerWidth >= 768) {
    maquinaDeEscribir(104, 639);
  }

  if (window.innerWidth <= 992 && window.innerWidth >= 768) {
    maquinaDeEscribir(103, 639);
  }

  /*Mobile*/
  if (window.innerWidth >= 541 && window.innerWidth <= 767) {
    maquinaDeEscribir(107, 480);
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
    //debugger;
    if (elemento.clientWidth == width) {
      elemento.classList.remove("linea");
      tercerParrafo.classList.add("linea");
      tercerParrafo.classList.add("mostrarMetaTres");
      elemento.classList.remove("linea");
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
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function () {
  $(this).scroll(function () {
    var $winheight = $(window).height();
    var $winPos = $(document).scrollTop() + $winheight - 600;
    $("img").each(function () {
      var $pos = $(this).offset().top;
      if ($winPos > $pos) {
        $(this).addClass("animate");
      } else {
        $(this).removeClass("animate");
      }
    });
  });
});

/*Funcion para las cards de Seccion Proyectos.*/
document.querySelector(".card-box").onclick = function (e) {
  const head = e.currentTarget;
  head.classList.toggle("active");
};

document.querySelector(".card-box-digitalers").onclick = function (e) {
  const head = e.currentTarget;
  head.classList.toggle("active");
};

//Funcion Back to top
var amountScrolled = 3405;

$(window).scroll(function () {
  if ($(window).scrollTop() > amountScrolled) {
    $("button.back-to-top").addClass("show");
  } else {
    $("button.back-to-top").removeClass("show");
  }
});

$("button.back-to-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    800
  );
  return false;
});
