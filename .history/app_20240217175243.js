$("#addTodo").click(function () {
  const inputTodo = $("#input").val();
  $("#todoList").append("<li><input type = 'checkbox'>" + inputTodo + "</li>");

  $("input").val("");
});

$(document).on("check", "input[type=checkbox]", function() {
  if($(this).is(":checked")) {
    $(this).parent().css("")
  }
})