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
        var navigationButtons = $(".item-ref");

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
        navigationButtons.on("click", toggleMenu);

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
        var activeItem = $this.parent().find(".composition__list-block");
        activeItem.stop(true, false);
        activeItem.slideDown(300);
    });

    burgerComposition.mouseleave(function (e) {
        var $this = $(e.currentTarget);
        var activeItem = $this.parent().find(".composition__list-block");
        activeItem.stop(true, false);
        activeItem.slideUp(300);
    });

    // Аккордеон для секции "О нас"

    $(".accordeon__item .item__bottom").hide();

    $(function () {
        $(".item__head").on("click", function (e) {

            const $this = $(e.currentTarget);
            const $thisParent = $this.parent();
            $thisParent.siblings().removeClass("active");
            $thisParent.siblings().find(".item__head").removeClass("rotate__triangle");
            $thisParent.siblings().find(".item__bottom").slideUp();
            $this.toggleClass("rotate__triangle");
            $thisParent.addClass("active");
            $thisParent.find(".item__bottom").slideToggle(300);
        })
    });

    // Функция открытия меню

    var menuAcco = function () {
        var calculateWidth = function () {
            const windowWidth = $(window).width();
            const links = $(".menu__item");
            const linksWidth = links.width();
            const reqWidth = windowWidth - linksWidth * links.length;

            return reqWidth > 550 ? 550 : reqWidth;
        };

        var openItem = function (item) {
            const container = $(".menu__types");
            const otherItems = $(".menu__type", container);
            const content = item.find(".menu__descr");
            const accoText = $(".descr-text", container);
            const activeItem = otherItems.filter(".active");
            const activeName = item.find(".menu__name");
            const activeContent = activeItem.find(".menu__descr");
            const openWidth = calculateWidth();

            otherItems.removeClass("active");
            otherItems.find(".menu__name").removeClass("active-name");
            item.addClass("active");
            activeName.addClass("active-name");


            accoText.hide();
            activeContent.animate({width: "0px"});

            content.animate(
                {
                    width: openWidth + "px"
                },
                function () {
                    accoText.fadeIn();
                }
            );
        };

        const closeItem = function (item) {
            item.removeClass("active");
            item.find(".active-name").removeClass("active-name");

            item.closest(".menu__types").find(".descr-text").stop(true, true).fadeOut(function () {
                    item.find(".menu__descr").animate({width: "0px"});
                });
        };

        $(".menu__item").on("click", function (e) {
            e.preventDefault();
            const $this = $(e.target);
            const item = $this.closest(".menu__type");
            if (item.hasClass("active")) {
                closeItem(item);
            } else {
                openItem(item);
            }
        });
    };

    menuAcco();

// Слайдер

    var slider = $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 40,
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

    // Раскрытие кружков в меню навигации справа.

    var dotList = $(".dot__list").find(".dot__item");

    var dotOpenFunction = function () {
        var sectionClass = $("body").attr("class");
        var sectionNum = sectionClass.slice(sectionClass.length - 1);
        var listNum = dotList.eq(sectionNum - 1);
        listNum.siblings().find(".dot__elem").removeClass("active");
        listNum.find(".dot__elem").addClass("active");
    };

    setInterval(dotOpenFunction, 1);

// Функция работы с модальным окном в секции отзывов.

    $("#modal_window").hide();

    $(".more__button__link").on("click", function (e) {
        const $this = $(e.currentTarget);
        var text = $this.parent().find(".review__text").html();
        $("#modal_window").find(".modal-content").html(text);
    });


    var fancyboxModal = function () {
        $(".more__button__link").fancybox({
            touch: true,
            smallBtn: false,
            buttons: []
        });
            $(".modal-x").on("click", function(e) {

            $.fancybox.close();
        });
    };

    fancyboxModal();
})
;