var
  req       = require('request')
, pyg       = require('pygments')
, langs     = require('./langs')

, onError   = function(error){ throw error; }
;

module.exports = function(url, data, callback){
  console.log("posting data", data)
  req.post(url, { form: data }, function(error, response, body){
    if (error) onError(error);

    lang = langs(response.headers['content-type']);

    if (lang === "json") body = JSON.stringify(JSON.parse(body), true, "  ");
    pyg.colorize(body, lang, 'console', function(data){
      console.log(data);
      if (callback) callback();
    });
  });
}