'use strict';
var Client = require('litecore-wallet-client');


var fs = require('fs');
//var BWS_INSTANCE_URL = 'http://47.52.232.123:3232/bws/api';

var BWS_INSTANCE_URL = 'https://ltc.58wallet.io/bws/api';

var client = new Client({
    baseUrl: BWS_INSTANCE_URL,
    verbose: false,
});

var fileName = 'live-lite.dat';
var str = fs.readFileSync(fileName, {
    encoding: 'utf8'
});

client.import(str.toString());

client.getBalance({ twoStep: false }, function(err, resp) {
    if (err) {
        console.log(err);
        return;
    }

    console.log("getBalance:", resp);
});