"use strict";

$(document).ready(function () {


    var menu = (function (option) {

        var button = document.querySelector(option.button);
        var menu = document.querySelector(option.menu);
        var content = document.querySelector('.content');
        var orderButton = document.querySelector('.button');
        var phonesMenu = document.querySelector('.phones__menu');
        var contentMain = document.querySelector('.content__main');
        var arrowButton = document.querySelector('.arrow');
        var miniMenu = document.querySelector('.mini__menu-x');
        var body = document.querySelector('body');

        var toggleMenu = function () {
            button.classList.toggle("button--active");
            menu.classList.toggle("hide__content");
            content.classList.toggle("hide__content");
            orderButton.classList.toggle("hide__content");
            phonesMenu.classList.toggle("phones__menu-active");
            contentMain.classList.toggle("main__menu");
            arrowButton.classList.toggle("hide__content");
            miniMenu.classList.toggle("hide__content");
            body.classList.toggle("body--overflow");
        };

        var addListeners = function () {
            button.addEventListener("click", toggleMenu);
        };

        return {
            init: addListeners
        };
    })
    ({
        button: ".mini__menu-button",
        menu: ".phones__menu"
    });

    menu.init();

    var sliderItem = $(".slider__item");
    sliderItem.parent().find(".slider__active").show();

    $(".composition__list-block").hide();

    var burgerComposition = $(".burger__composition");
    burgerComposition.mouseenter(function (e) {
        var $this = $(e.currentTarget);
        $this.stop();
        $this.parent().find(".composition__list-block").slideDown(300);
    });

    burgerComposition.mouseleave(function (e) {
        var $this = $(e.currentTarget);
        $this.stop();
        $this.parent().find(".composition__list-block").slideUp(300);
    });


    $(".accordeon__item .item__bottom").hide();

    $(function () {
        $(".item__head").on("click", function (e) {

            const $this = $(e.currentTarget);
            $this.parent().siblings().removeClass("active");
            $this.parent().siblings().find(".item__head").removeClass("rotate__triangle");
            $this.parent().siblings().find(".item__bottom").slideUp();
            $this.toggleClass("rotate__triangle");
            $this.parent().addClass("active");
            $this.parent().find(".item__bottom").slideToggle(300);
        })
    });

    // Функция открытия меню

    $(function () {
        $(".menu__item").on("click", function (e) {
            e.preventDefault();
            const $this = $(e.currentTarget);
            $this.parent().siblings().find(".menu__descr").removeClass("active__menu-trigger");
            $this.parent().find(".menu__descr").toggleClass("active__menu-trigger");
        })
    });

    $(".modal__window").hide();

    $(function () {
        $(".more__button__link").on("click", function (e) {
            e.preventDefault();
            const $this = $(e.currentTarget);
            console.log($this);

        })
    });

    var slider = $(".owl-carousel").owlCarousel({
        loop:true,
        margin: 20,
        nav:true,
        navText: ["",""],
        items: 1
    });

    $(".right__arrow").on("click", function (e) {
        e.preventDefault();
        slider.trigger("next.owl.carousel")
    });

    $(".left__arrow").on("click", function (e) {
        e.preventDefault();
        slider.trigger("prev.owl.carousel");
    });

    $(".more__button__link").on("click", function () {
        $.fancybox.open();
    });

    $(".wrapper").onepage_scroll({
        // sectionContainer: "section",
        // easing: "ease",
        // animationTime: 1000,
        // pagination: true,
        // updateURL: false,
        // // beforeMove: function(index) {},
        // // afterMove: function(index) {},
        // loop: false,
        // keyboard: true,
        // responsiveFallback: false,
        // direction: "vertical"
    });

});