"use strict";

var menu = (function (option) {

    var button = document.querySelector(option.button);
    var menu = document.querySelector(option.menu);
    var content = document.querySelector('.content');
    var orderButton = document.querySelector('.button');
    var phonesMenu = document.querySelector('.phones__menu');
    var contentMain = document.querySelector('.content__main');
    var arrowButton = document.querySelector('.arrow');

    var toggleMenu = function(e) {
        button.classList.toggle("button--active");
        menu.classList.toggle("hide__content");
        content.classList.toggle("hide__content");
        orderButton.classList.toggle("hide__content");
        phonesMenu.classList.toggle("phones__menu-active");
        contentMain.classList.toggle("main__menu");
        arrowButton.classList.toggle("hide__content");
    };

    var addListeners = function() {
        button.addEventListener("click", toggleMenu);
    };

    return {
        init: addListeners
    };
})
({
    button:".mini__menu-item",
    menu: ".phones__menu"
});

menu.init();
