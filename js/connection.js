var Parse = require('node-parse-api').Parse;

var APP_ID = "S0CYBr2HxVA5R8DuWfnKK1UlNFdlfl8StN6mvKr1";
var MASTER_KEY = "MtnpOoh1DadpIRV0PVwu3JrdVBqfdJtbSCb5mYmF";

var app = new Parse(APP_ID, MASTER_KEY);

app.update('User', 'LvBHE4KTdq', { status: false }, function (err, response) {
  console.log(err);
});
