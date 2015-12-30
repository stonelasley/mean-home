'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Spectral = new Module('spectral');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Spectral.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Spectral.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Spectral.menus.add({
    title: 'spectral example page',
    link: 'spectral example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Spectral.aggregateAsset('css', 'spectral.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Spectral.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Spectral.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Spectral.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Spectral;
});
