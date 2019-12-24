// ECHO is on.

$(document).ready(function(){
    // displays the start screen
    $('.start').show();

    $('#startButton').click(function(){
        $('.questionWrapper').hide();
        $('.question1').show();
    });
    $('#q1yl').click(function(){
        $('.questionWrapper').hide();
        $('.question2').show();
    });
    $('#q2wm').click(function(){
        $('.questionWrapper').hide();
        $('.question21').show();
    });
});