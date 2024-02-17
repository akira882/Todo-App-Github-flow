$("#addTodo").click(function () {
  const inputTodo = $("input").val();
  $("#chekout").append("<li><input type = 'checkbox'>" + inputTodo + "</li>");

  $("input").val("");
});