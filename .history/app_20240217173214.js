$("#addTodo").click(function () {
  const inputTodo = $("input").val();
  $("#chckout").append("<li><input type = 'checkbox'>" + inputTodo + "</li>");

  $("input").val("")
});