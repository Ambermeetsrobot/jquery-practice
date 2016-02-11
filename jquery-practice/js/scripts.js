
$(document).ready(function() {
$("button#cats").click(function() {
  $("ul#cat").prepend("<li>Meow!</li>");
  $("ul#dog").prepend("<li>Woof!</li>");

  $("ul#cat").children("li").first().click(function() {
  alert('I will scratch out your eyes');
  });
  $("ul#dog").children("li").first().click(function() {
  alert('I will eat you, kitty');
  });
});


$("button#dogs").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");

    $("ul#cat").children("li").first().click(function() {
    alert('I will scratch out your eyes');
    });
    $("ul#dog").children("li").first().click(function() {
    alert('I will eat you, kitty');
    });
  });
});
