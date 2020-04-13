var nav = $("#nav ul li");
var cont = $("#contents > div");

nav.click(function (e) {
  e.preventDefault();
  var target = $(this);
  var index = target.index();
  var section = cont.eq(index);
  var offset = section.offset().top;
  $("html,body").animate({ scrollTop: offset }, 600, "easeInOutExpo");
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  if (wScroll > 200) {
    $("#nav").addClass("on");
  } else if (wScroll == 0) {
    $("#nav").removeClass("on");
  }

  if (wScroll >= cont.eq(0).offset().top) {
    nav.removeClass("active");
    nav.eq(0).addClass("active");
  }
  if (wScroll >= cont.eq(1).offset().top) {
    nav.removeClass("active");
    nav.eq(1).addClass("active");
  }
  if (wScroll >= cont.eq(2).offset().top) {
    nav.removeClass("active");
    nav.eq(2).addClass("active");
  }
  if (wScroll >= cont.eq(3).offset().top) {
    nav.removeClass("active");
    nav.eq(3).addClass("active");
  }
  if (wScroll >= cont.eq(4).offset().top) {
    nav.removeClass("active");
    nav.eq(4).addClass("active");
  }
  if (wScroll >= cont.eq(5).offset().top) {
    nav.removeClass("active");
    nav.eq(5).addClass("active");
  }
});
