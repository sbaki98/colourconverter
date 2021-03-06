var expect = require('chai').expect;
var request = require('request');
var constants = require('../../app/constants');

// Constants
const PORT = constants.PORT;
const HOST = constants.HOST;

var url_base = `http://${HOST}:${PORT}`;

describe("Color Code Converter API", function() {

    describe("RGB to Hex conversion", function() {
      var url = url_base + "/rgbToHex?red=255&green=255&blue=255";
  
      it("returns status 200", function(done) {
        request(url, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
        });
      });
  
      it("returns the color in hex", function(done) {
        request(url, function(error, response, body) {
          expect(body).to.equal("ffffff");
          done();
        });
      });
  
    });
  
    describe("Hex to RGB conversion", function() {
      var url = url_base + "/hexToRgb?hex=00ff00";
  
      it("returns status 200", function(done) {
        request(url, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
        });
      });
  
      it("returns the color in RGB", function(done) {
        request(url, function(error, response, body) {
          expect(body).to.equal("[0,255,0]");
          done();
        });
      });
    });
  
  });
