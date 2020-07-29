'use strict';

( function () {
    function init() {
        const router = new Router([
            new Route('home', 'home.html', true), //default
            new Route('about', 'about.html')
        ]);
    }
    init();
});