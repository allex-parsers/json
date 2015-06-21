function createJSONParser(execlib){
  'use strict';
  function JSONParser(options){
    options = options||{};
    this.delimiter = options.delimiter || null;
    this.indent = options.indent || 2;
  }
  JSONParser.prototype.destroy = function(){
    this.indent = null;
    this.delimiter = null;
  };
  JSONParser.prototype.fileToData = function(filedata){
    try{
      return JSON.parse(filedata);
    }
    catch(ignore){
      return null;
    }
  };
  JSONParser.prototype.dataToFile = function(data){
    return JSON.stringify(data,this.delimiter,this.indent);
  };
  return JSONParser;
}

module.exports = createJSONParser;
