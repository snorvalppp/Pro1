$(document).ready(function() {
    $('#addtodo').click(function(){
        var = newtodo=$('newtodo').val();
        if (newtodo){
            $('#listTodo').append('<li>'+newtodo+'</li>');
        }
    }
});
