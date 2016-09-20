/**
 * Created by buuug7 on 2016/9/20.
 */
$(document).ready(function () {

  function showbg(e) {
    var t = $("#flashs .btn span").index($("#flashs .btn span.cur"));
    t < 0 && (t = 0), $("#flashs .btn span.cur").css("opacity", .7).removeClass("cur"), $("#flashbg" + t).css({
      opacity: 0,
      "z-index": 1
    }), $("#flashbg" + showIndex).css({"z-index": 2}), $("#flashbg" + showIndex).animate({opacity: 1}, 500), $("#flashs .btn span").eq(showIndex).css("opacity", 1).addClass("cur")
  }

  var showIndex = 1, h = $("#flashs div.bgitem").css("opacity", 0).length, btn = "<div class='btn'>";
  for (var i = 0; i < h; i++) btn += "<span>" + (i + 1) + "</span>";
  btn += "</div>", $("#flashs").append(btn), $("#flashs .btn span").css("opacity", .7).mouseenter(function () {
    showIndex = $("#flashs .btn span").index(this), showbg(showIndex)
  }).eq(0).trigger("mouseenter"), $("#flashs").hover(function () {
    clearInterval(picTimer)
  }, function () {
    picTimer = setInterval(function () {
      showIndex++, showIndex == h && (showIndex = 0), showbg(showIndex)
    }, 5e3)
  }).eq(0).trigger("mouseleave");

  $(".b7-in").slide({});

  new Marquee("faq", 0, 1, 306, 392, 40, 0, 1000, 22);
});