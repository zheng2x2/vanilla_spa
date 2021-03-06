'use strict';

function Router(routes) {
    try {
        if(!routes) {
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    }catch (e) {
        console.error(e)
    }
}

Router.prototype = {
    routes: undefined, //an array containing the routes of our app.
    rootElem: undefined, //the root element of our application. The place where other HTML gets rendered.
    constructor: function (routes) { //executed only one time in the creation of Router.
        this.routes = routes;
        this.rootElem = document.getElementById('app');
    },
    init: function(){ //This function creates a listener to the hashchange event of window.
        const r = this.routes;
        ( function (scope, r) {
            window.addEventListener('hashchange', function (e) {
                scope.hashChanged(scope, r);
            });
        })(this, r);
        this.hashChanged(this, r);
    },
    hashChanged: function(scope, r){
        if(window.location.hash.length > 0) {
            for(let i=0, length=r.length; i<length; i++) {
                const route = r[i];
                if(route.default){
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    },
    goToRoute: function (htmlName) { //getting and loading the correct HTML for the active route.
        ( function(scope) {
            const url = 'views/'+htmlName, xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if(this.readyState === 4 && this.status ===200) {
                    scope.rootElem.innerHTML = this.responseText;
                }
            }
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);''
    }
}