var nav = $("nav ul li"); //버튼을 변수에 할당 (저장)
var cont = $("#contents > div"); // 콘텐츠를 변수에 할당

//버튼을 클릭했을 때
nav.click(function (e) {
  e.preventDefault(); // #의 기본 기능을 차단
  var target = $(this); // 클릭한 타겟을 변수에 할당
  var index = target.index(); // 클릭한 타겟의 번호를 할당
  var section = cont.eq(index); // 클릭한 버튼과 콘텐츠를 연결
  var offset = section.offset().top; // 각 콘텐츠의 오프셋 값을 할당
  //   alert(offset);
  $("html, body").animate({ scrollTop: offset }, 600, "easeInOutExpo");
});
