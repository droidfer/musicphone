# MusicPhone
_"Music Phone" is a mobile application to add and list stats of genres of music submited by users. This is meant to work with the server https://github.com/droidfer/apimusiclist due the json response adjust to this app_

<!-- ABOUT THE TECH -->
## About The API Technologies
The project is build with:
- React Native 

<!-- CONFIGURATION-->
## Initial Setup

###### Server IP configuration:
This app is build to interact with this server: https://github.com/droidfer/apimusiclist , so its require to set this server for the app to work

Currently, due this project is meant to be simple, the URL is hardcoded in the project which is http://192.168.100.137:8080 (not working URL, this is internal LAN URL)

The URL in the project should be changed in tha app for a working server configuration

To implement the URL the .js that must be changes are:
- encuesta.js
- resultados.js


