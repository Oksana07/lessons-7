$(function () {
  var $el,
    leftPos,
    newWidth,
    speed = 200;

  $("#runningNav").append("<li id='runningLine'></li>");

  var $magicLine = $("#runningLine");

  $magicLine
    .width($(".current").width())
    .css("left", $(".current a").position().left)
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());

  $("#runningNav li")
    .find("a")
    .hover(
      function () {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();

        $magicLine.stop().animate(
          {
            left: leftPos,
            width: newWidth,
          },
          {
            duration: speed,
          }
        );
      },
      function () {
        $magicLine.stop().animate(
          {
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth"),
          },
          {
            duration: speed,
          }
        );
      }
    );
});
