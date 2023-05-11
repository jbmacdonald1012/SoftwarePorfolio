# Overview

This application serves as a vacation planner and travel companion for anyone visiting a place they've never been to before, 
or are looking for something new in their area to explore. 

The application will begin with the users geo-location and will dynamically find restaurants, hotels, and attractions located within 
the area of the current map view. The user can filter the information by any of those aforementioned categories, as well as, access a 
sub-filter of those categories based on ratings of the locations the user is seeking. 

In addition to the filters, if the user selects a point of interest, they will be taken to the card they're interested in on the left-hand
side of the map. The cards include information about the location and access to the location's website. 

The application is built for use on either a desktop computer, tablet, or mobile device, and will adjust accordingly to screen-size.

Below is a demonstration of the application in use. 

[Software Demo Video](https://youtu.be/5-cJ5wFOzfo)

# Development Environment

This project was build using React.js via `create-react-app` using Node.js.  I used the following dependencies/libraries to complete the project:

- Node.js
- react
- reactDOM
- material-ui/core
- material-ui/icons
- material-ui/lab
- react-google-maps/api
- axios
- google-map-react

Below are the scripts for running the site once you've cloned the repository

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Useful Websites

* To learn React, check out the [React documentation](https://reactjs.org/)
* [Google Cloud Console](https://console.cloud.google.com/) Setup and manage Google Maps API
* [RapidAPI](https://rapidapi.com/hub) Create and manage Travel API
* [Google Maps API Documentation](https://developers.google.com/maps/documentation/javascript)

# Future Work

* Update the cards with distance fields to show travel distance
* Add directions capabilities
* Integrate with OpenWeather API to show weather in locations

