$(".nav-link").click(function () {
  var sectionID = $(this).attr("href");
  var sectionPlace = $(sectionID).offset().top;
  $("html,body").animate({ scrollTop: sectionPlace }, 1000);
});
$(".arrowfont").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});
$(window).scroll(function () {
  var aboutplace = $("#about").offset().top;
  var navHeight = $(".navbar").outerHeight(true);
  var myscrollvalue = $(window).scrollTop();
  if (myscrollvalue > aboutplace - navHeight) {
    $(".arrowfont").fadeIn(500);
  } else {
    $(".arrowfont").fadeOut(500);
  }
});
$(".aboutp").click(function () {
  var aboutplace = $("#about").offset().top;
  $("html,body").animate({ scrollTop: aboutplace }, 1000);
});
///////////////////////////////////////////////////////////////////////////////////////
var alllist = $(".tool-color .collorr");
alllist.eq(0).css("backgroundColor", "#e65f78");
alllist.eq(1).css("backgroundColor", "#31b164");
alllist.eq(2).css("backgroundColor", "#37b8df");
alllist.eq(3).css("backgroundColor", "#5d69f6");
alllist.eq(4).css("backgroundColor", "#87ceeb");
alllist.eq(5).css("backgroundColor", "#f2b31a");
////////////////////////////////////
var toolcolorwidth = $(".tool-color").outerWidth();
$(".tool-box").css("left", "-" + toolcolorwidth);
////////////////////////////////////
$(".tool-color .collorr").click(function () {
  var color = $(this).css("backgroundColor");
  $(".yourcolor").css("color", color);
  $(".yourbgcolor").css("backgroundColor", color);
  $(".borderclr").css("borderColor", color);
  $(document).ready(function () {
    $(".nav-link").hover(
      function () {
        $(this).css("color", color);
      },
      function () {
        $(this).css("color", "white");
      }
    );
    //////////////////////
    $(".font-icon").hover(
      function () {
        $(this).css("color", color);
        $(this).css("borderColor", color);
      },
      function () {
        $(this).css("color", "black");
        $(this).css("borderColor", "#d4d4d4");
      }
    );
    /////////////////////
    $(".activee").css("backgroundColor", color);
    $(".work-a").hover(
      function () {
        $(this).css("color", "white");
        $(this).css("backgroundColor", color);
      },
      function () {
        $(this).css("color", "black");
        $(this).css("backgroundColor", "white");
      }
    );
  });
  /////////////////////////
});
///////////////////////////////////////////////////////

$(".div-icon").click(function () {
  var leftbox = $(".tool-box").css("left");
  var leftboxvalue = parseInt(leftbox);
  if (leftboxvalue == 0) {
    $(".tool-box").animate({ left: "-" + toolcolorwidth }, 1000);
  } else {
    $(".tool-box").animate({ left: 0 }, 1000);
  }
});
/////////////////////////////////////////////////////////////////////
$(".work-a").click(function () {
  var value = $(this).attr("data-class");
  console.log(value);
  if (value == "all") {
    $(".all").fadeIn(1000);
  } else if (value == "seo") {
    $(".all").not($(".seo")).fadeOut();
    $(".seo").fadeIn(1000);
  } else if (value == "webdesign") {
    $(".all").not($(".webdesign")).fadeOut();
    $(".webdesign").fadeIn(1000);
  } else if (value == "work") {
    $(".all").not($(".work")).fadeOut();
    $(".work").fadeIn(1000);
  } else if (value == "wordpress") {
    $(".all").not($(".wordpress")).fadeOut();
    $(".wordpress").fadeIn(1000);
  }
});
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("work-a");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activee");
    current[0].className = current[0].className.replace(" activee", "");
    this.className += " activee";
  });
}
