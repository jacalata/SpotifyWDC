// The necessary configuration for your server
// Contains credentials for your Spotify application (should be kept secret)
// And the new redirect path for the OAuth flow

var PORT = 3000;

var os = require("os");
var hostName = os.hostname();
var redirectUri = "http://" + 'localhost' + ":" + PORT + "/callback";
// put in localhost because I have been getting an invalid redirect uri when using 'hostname' ... nfi why, registered it and all

module.exports = {
 'PORT': PORT,
 'CLIENT_ID': 'f0551d1b48d241b9a21d6264c828fd7b',
 'CLIENT_SECRET': '7931169be79e44a19a4d21e449e84a74',
 'REDIRECT_URI': redirectUri
};
