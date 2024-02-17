$("#addTodo").click(function () {
  const inputTodo = $("#input").val();
  $("#todo").append("<li><input type = 'checkbox'>" + inputTodo + "</li>");

  $("input").val("");
});