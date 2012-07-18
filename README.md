nearme-sketch
=============

This is a very basic node.js + sparql + geolocation example

The node.js grabs some sparql data from a server, based on the 
lat/long from the client browser, and returns some json data.

I used node.js to get around the access-control restriction 
problem on the sparql server - otherwise it could just be written 
in js / html. You can use an .htaccess file to map an apache server 
location to the node server.

It requires a browser with geo-location capability.

sudo apt-get install nodejs
sudo apt-get install npm

npm install jQuery
npm install jsdom
npm install xmlhttprequest
npm install express

