'use strict';

function Route(name, htmlName, defaultRoute) {
    try{
        if(!name || !htmlName) { //we are checking if the route is active
            throw 'error: name and htmlName params are mandatories'
        }
        this.constructor(name, htmlName, defaultRoute)
    }catch(e){
        console.error(e)
    }
}

Route.prototype = {
    name: undefined, //name of this route
    htmlName: undefined, //name of the HTML to load with the route
    default: undefined, //if the route is the default route of our app.
    constructor: function(name, htmlName, defaultRoute) {
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
    },
    isActiveRoute: function(hashedPath) { //provided by each route to check if it’s the active one. It receives the actual window location.
        return hashedPath.replace('#', '') === this.name;
    }
}