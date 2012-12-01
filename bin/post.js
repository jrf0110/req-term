#!/usr/bin/env node

var
  post = require('../lib/post')
, cb = function(){
    process.exit();
  }
;

if (process.argv.length < 4){
  console.log("Enter data below and press enter twice when done\n");
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  var prev = "", data = "";
  process.stdin.on('data', function(text){
    data += text;
    if (prev.indexOf("\n") > -1 && text === "\n"){
      return post(process.argv[2], eval('(' + data + ')'), cb);
    }
    prev = text;
  });
} else if (process.argv.length > 4){
  post(process.argv[2], eval('(' + process.argv.slice(3).join(' ') + ')'), cb);
} else post(process.argv[2], eval('(' + process.argv[3]) + ')', cb);