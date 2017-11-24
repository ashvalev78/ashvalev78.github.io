"use strict";

$(document).ready(function () {

    //Меню при нажатии на "гамбургер" в приветственной секции

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

    // Анимация для списка ингредиентов гамбургера

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

    // Аккордеон для секции "О нас"

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
            if ($this.parent().find(".menu__descr").hasClass("active__menu-trigger")) {
                $this.parent().find(".menu__descr").removeClass("active__menu-trigger");
            } else {
                $this.parent().find(".menu__descr").addClass("active__menu-trigger");
                $this.parent().siblings().find(".menu__descr").removeClass("active__menu-trigger");
            }
        })
    });

    // Слайдер

    var slider = $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["", ""],
        items: 1
    });

    // Кнопки навигации для слайдера

    $(".right__arrow").on("click", function (e) {
        e.preventDefault();
        slider.trigger("next.owl.carousel")
    });

    $(".left__arrow").on("click", function (e) {
        e.preventDefault();
        slider.trigger("prev.owl.carousel");
    });

    // One-page scroll

    if (!$("body").hasClass("body--overflow")) {
        $(".wrapper").onepage_scroll({
            animationTime: 750,
            pagination: false,
            loop: false
        });
    } else {
        $(".wrapper").onepage_scroll({
            sectionContainer: "div"
        });
    }

    // Ссылки для нормальной прокрутки

    $("[data-scroll-to]").on('click', function (e) {
        e.preventDefault();
        const $this = $(e.currentTarget);
        $.fn.moveTo($this.attr('data-scroll-to'));
    });

    var sectionSelector = $(function() {
        $(".wrapper").on("wheel", function () {
            var sectionClassNum = $("body").attr("class");
            var sectionNum = sectionClassNum.slice(sectionClassNum.length - 1);
            var dotElements = $("[data-scroll-to]");
            console.log(dotElements);
            if (dotElements.find(".dot__item").attr("data-scroll-to") === +sectionNum) {
                console.log("OK");
            }
        });
    });

    sectionSelector();

    // Функция работы с модальным окном в секции отзывов.

    $("#modal_window").hide();

    $(".more__button__link").on("click", function (e) {
        const $this = $(e.currentTarget);
        var text = $this.parent().find(".review__text").html();
        $("#modal_window").html(text);
        $(function (e) {

        });
    });


    var fancyboxModal = function () {
        $(".more__button__link").fancybox({
            touch: true,
            smallButton: false
        });
        // $.fancybox.center;
    //     $(".modal-review__close").on("click", e => {
    //         e.preventDefault();
    //     $.fancybox.close();
    // });
    };

    fancyboxModal();
});