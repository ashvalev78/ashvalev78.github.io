ymaps.ready(init); //ждем загрузки api и DOM после чего запускаем функцию init

var placemarks = [ // Массив объектов который мы перебираем методом forEach
    {
        latitude: 59.93041804,
        longitude: 30.37307396,
        hintContent: '<div class="map__hint">Ул. 2-я Советская, д. 2</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="images/icons/logo.svg" alt="Бургер"/>',
            "Самые вкусные бургеры, заходите в гости",
            "</div>"
        ]
    },
    {
        latitude: 59.97117825,
        longitude: 30.31919475,
        hintContent: '<div class="map__hint">Аптекарский проспект, д. 8А</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="images/icons/logo.svg" alt="Бургер"/>',
            "Самые вкусные бургеры, заходите в гости",
            "</div>"
        ]
    },
    {
        latitude: 59.91759898,
        longitude: 30.31750835,
        hintContent: '<div class="map__hint">Московский проспект, д. 19</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="images/icons/logo.svg" alt="Бургер"/>',
            "Самые вкусные бургеры, заходите в гости",
            "</div>"
        ]
    },
    {
        latitude: 59.91909572,
        longitude: 30.47006486,
        hintContent: '<div class="map__hint">Проспект Большевиков, д. 1</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="images/icons/logo.svg" alt="Бургер"/>',
            "Самые вкусные бургеры, заходите в гости",
            "</div>"
        ]
    }
];

/*Инициализация функции создания карты и добавление на карту placemark*/
function init() {
    var map = new ymaps.Map("map", {
        center: [59.93377950, 30.33437334],
        zoom: 12,
        controls: ["zoomControl"], // Выводим только кнопки зума
        behaviors: ["drag"]
    });
    placemarks.forEach(function(item){
        var myPlacemark = new ymaps.Placemark(
            [item.latitude, item.longitude],
            {
                hintContent: item.hintContent,
                balloonContent: item.balloonContent.join("")
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/icons/map-marker.svg",
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57]
                // iconImageHref: "img/sprite.png",
                // iconImageSize: [46, 57],
                // iconImageOffset: [-23, -57],
                // iconImageClipRect: [[415, 0], [461, 57]]
            });
        map.geoObjects.add(myPlacemark);
    })
}