document.querySelector('button').
$('button').click(function() {
    let getID = $(this).attr('id');
    if ($('#hideImage'+getID).css('display') === 'none') {
        $('#hideImage'+getID).show();
    } else {
        $('#hideImage'+getID).hide();
    }
})