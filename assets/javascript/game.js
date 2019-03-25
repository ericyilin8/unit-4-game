var wins = 0;
var losses = 0;

gameinit();

$('#crystal1').on('click', function () {
    $('#score').attr('value', ($('#score').attr('value') * 1 + $('#crystal1').attr('value') * 1));
    $('#score').html($('#score').attr('value'));
});

$('#crystal2').on('click', function () {
    $('#score').attr('value', ($('#score').attr('value') * 1 + $('#crystal2').attr('value') * 1));
    $('#score').html($('#score').attr('value'));
});

$('#crystal3').on('click', function () {
    $('#score').attr('value', ($('#score').attr('value') * 1 + $('#crystal3').attr('value') * 1));
    $('#score').html($('#score').attr('value'));
});

$('#crystal4').on('click', function () {
    $('#score').attr('value', ($('#score').attr('value') * 1 + $('#crystal4').attr('value') * 1));
    $('#score').html($('#score').attr('value'));
});

$('button').on('click', function () {
    if ($('#score').attr('value') * 1 == $('#number').attr('value') * 1) {
        wins++;
        $('#wins').html(wins);
        gameinit();
    }
    else if ($('#score').attr('value') * 1 > $('#number').attr('value') * 1) {
        losses++;
        $('#losses').html(losses);
        gameinit();
    }
});

function gameinit() {
    $('#number').attr('value', Math.floor((Math.random() * 102) + 19));
    $('#number').html($('#number').attr('value'));
    $('#score').attr('value', 0);
    $('#score').html($('#score').attr('value'));
    $('#crystal1').attr('value', Math.floor((Math.random() * 19) + 1));
    $('#crystal2').attr('value', Math.floor((Math.random() * 19) + 1));
    $('#crystal3').attr('value', Math.floor((Math.random() * 19) + 1));
    $('#crystal4').attr('value', Math.floor((Math.random() * 19) + 1));

}