var stage = "LOCAL";
var path = require('path');
var port = 8087
var portlan = 8088
var rootPath = path.normalize(__dirname + '/../..');

// environment
if (stage == "LOCAL") {
  var URL_DOMAIN = "http://localhost:"+port+"/";
  var URL_DOMAIN_LAN = "http://localhost:"+portlan+"/";
  var SERVER_RETURN_ROOT = URL_DOMAIN;
}
else {
  // PRODUCTION - live
  var URL_DOMAIN = "";
  var SERVER_RETURN_ROOT = URL_DOMAIN;
}

/**
  * @set the evironment in hosted
**/
exports.environment = function () {
  var stage = {
    url_domain: URL_DOMAIN,
    url_domain_lanapp: URL_DOMAIN_LAN,
    root: rootPath,
    port: process.env.PORT || port,
    hostname: process.env.HOST || URL_DOMAIN,
  };
  return stage;
}

//config mail smtp
exports.mail = function () {
  var smtp = {
    smtp_host: "smtp.gmail.com",
    smtp_user: "overtablecr@gmail.com",
    smtp_password: "Secoelpinto123!",
    frommail: '"Overtable - CS "<overtablecr@gmail.com>',
    title: "MEAN APP : ",
    mailadmin: 'overtablecr@gmail.com'
  };
  return smtp;
}

//config mail smtp
exports.appConfig = function () {
  var configs = {
    forgotpasswordLinkExpire : 300 // 5minutes
  };
  return configs;
}









