var main = $("main");

function close_menu() {
    main.addClass('menu-closed');
}

function open_menu() {
    main.removeClass('menu-closed');
}

$("#close-btn").on('click', function () {
    close_menu();
});


$("#open-btn").on('click', function () {
    open_menu();
});
