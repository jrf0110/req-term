var
  req       = require('request')
, pyg       = require('pygments')
, langs     = require('./langs')
;

module.exports = function(url){
  req.get(url, function(error, response, body){
    if (error) onError(error);

    lang = langs(response.headers['content-type']);

    if (lang === "json") body = JSON.stringify(JSON.parse(body), true, "  ");
    pyg.colorize(body, lang, 'console', function(data){
      console.log(data);
    });
  });
}