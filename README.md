# node-relay-server

This was an experiment for powering an arduino connected relay using an express
web server. Constructed at a [devICT](http://meetup.com/devict) hangout.

## it's real simple

Connect your relay's "CTRL" to pin 10.

```
$ npm install
$ node relay.js
```
Navigate to http://localhost:3005/ in your browser.

If it does not work on Ubuntu, try adding your user to the dialout group:
```
sudo adduser ${USER} dialout
```
and then you will probably have to reboot.
