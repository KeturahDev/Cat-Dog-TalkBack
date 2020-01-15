$(document).ready(function() {
  $("#cat").click(function() {
  $(".cat").prepend('<li>meow</li>')
  $(".dog").prepend('<li>Bark Bark</li>')
  });

  $("#dog").click(function() {
  $(".cat").prepend('<li>meow</li>')
  $(".dog").prepend('<li>Bark Bark</li>')
  });

  $("#throw-img").click(function() {
    $("#cat-img").before('<img src="img/cat.jpeg" alt="two cats in a sink">');
    $("#dog-img").before('<img src="img/dog.jpg" alt="puppy">');
  });
  
});
