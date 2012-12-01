module.exports = function(type){
  if (type.indexOf('html') > -1) return 'html';
  if (type.indexOf('json') > -1) return 'json';
};