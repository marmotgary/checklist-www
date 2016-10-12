$(document).ready(function(){
    $("#button").click(function() {
        var toAdd = $('input[name=toDoInput]').val();
        console.log(toAdd);
        $('ul').append('<li class="toDo">'+ toAdd + "</li>");
        $('input[name=toDoInput]').val('');
      });

  $(document).on('click', '.toDo', function() {
    $(this).fadeOut(function(){
      $(this).remove();
    });
  });
});
