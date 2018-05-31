$(document).ready(function () {
    $('.mybtn').click(function () {
        $(this).find('i').toggleClass('fa-plus-square-o fa-minus-square-o')
    });
});