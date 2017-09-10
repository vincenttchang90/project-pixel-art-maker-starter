let color = $('#colorPicker').val();

$('#colorPicker').on('change', function() {
    console.log('we changed the color!');
    color = $('#colorPicker').val();
});

//Dynamically creates x by y grid
function makeGrid(x,y) {
    $('#pixel_canvas').empty();
    for(let i=0; i<y; i++){
        let row = $('<tr>');
        $('#pixel_canvas').append(row);
        for(let j=0; j<x; j++){
            $(row).append('<td class="cell"></td>');
        }
    }
}

//Attaches an event listener to submit button and each cell inside grid
$('#sizePicker').on('submit', function(e) {
    e.preventDefault();
    console.log('calling make Grid');
    let x = $('#input_width').val();
    let y = $('#input_height').val();
    makeGrid(x,y);
    $('.cell').click(function() {
        console.log('wtf');
        $(this).css('background', color);
    });
});
