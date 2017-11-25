'use strict';
var Client = require('litecore-wallet-client');


var fs = require('fs');
//var BWS_INSTANCE_URL = 'http://47.52.232.123:3232/bws/api';
var BWS_INSTANCE_URL = 'https://ltc.58wallet.io/bws/api';

var client = new Client({
    baseUrl: BWS_INSTANCE_URL,
    verbose: false,
});

client.createWallet("litewallet", "eric", 1, 1, { network: 'livenet', singleAddress: true }, function(err, secret) {
    if (err) {
        console.log('error: ', err);
        return
    };
    // Handle err
    console.log('Wallet Created. Share this secret with your copayers: ' + secret);
    fs.writeFileSync('live-lite.dat', client.export());
});

/*
client.getPeerBalance(client.credentials.copayerId, function(err, resp) {
    if (err) {
        console.log("couldn't get balance!")
    } else {
        console.log("saw resp : " + JSON.stringify(resp));
    }
});
*/