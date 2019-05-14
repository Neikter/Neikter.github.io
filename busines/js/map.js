
/*
    myMap.controls.add('mapTools');
    myMap.controls.add('routeEditor');
    myMap.controls.add('typeSelector');
    myMap.controls.add('zoomControl');
    myMap.controls.add('trafficControl');
*/

  ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map ("map", {
            center: [55.784644, 37.72378],
            zoom: 16
        });

        // myPlacemark = new ymaps.Placemark([55.763912, 37.600268], { 
        //     //balloonContent: '' 
        // });

        // myMap.geoObjects.add(myPlacemark);
        // myMap.controls.add('mapTools');
        // myMap.controls.add('routeEditor');
        // myMap.controls.add('typeSelector');
        // myMap.controls.add('zoomControl');
        // myMap.controls.add('trafficControl');
    }