$(document).ready(function() {
    var modalIsOpen = 0;
    $('.escola').click(function() {
        if (modalIsOpen === 0) {
            $('.modal').css('display', 'flex')
            modalIsOpen = 1
        } else {
            $('.modal').css('display', 'none')
            modalIsOpen = 0
        }
    });
    $('.modal').click(function() {
        $('.modal').css('display', 'none')
        modalIsOpen = 0
    });
});