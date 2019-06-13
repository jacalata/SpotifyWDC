// The necessary configuration for your server
// Contains credentials for your Spotify application (should be kept secret)
// And the new redirect path for the OAuth flow
;

var os = require("os");
var hostName = process.env.hostname || os.hostname(); // for local dev use replace this with "localhost"

var protocol = "";
if (!hostName.startsWith("http")) { protocol = "http://"; }

var PORT = ":3000"
if (hostName.indexOf("heroku") >=  0){ PORT = ""; }

var path = "callback";
if (!hostName.endsWith("/")){ path = "/" + path; }

var redirectUri = protocol + hostName + PORT + path;
var spotifyHerokuClient = '8a3627fb0fad4a21b5e6b422ca21c52f';
var spotifyHerokuSecret = '2148c4d9410a4b5c9fc5f35cea7eea45';
module.exports = {
 'PORT': PORT,
 'CLIENT_ID': spotifyHerokuClient,
 'CLIENT_SECRET': spotifyHerokuSecret,
 'REDIRECT_URI': redirectUri
};
