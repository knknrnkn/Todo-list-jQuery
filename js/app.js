$("ul").on('click', 'li', function() {
    $(this).toggleClass('compleeted');

});

$('ul').on('click', 'span', function(e) {
    $(this).parent().fadeOut(function() {
        500,
        function() {
            (this).remove();
        }
    });
    event.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
    if (event.which === 13) {
        let todoText = $(this).val();
        $(this).val('');
        $('ul').append("<li><span> <i class='fa fa-trash'></i> </span>" + todoText + "</li>");
    }

});

$('.fa-file').click(function() {
    $('input[type="text"]').fadeToggle();

});

// $('ul').apend('<li>')