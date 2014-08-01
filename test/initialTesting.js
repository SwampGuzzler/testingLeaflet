if (typeof require == 'function') {
	console.log("Here?");
    var assert = require('assert');
    console.log("For sure here")
    var L = require('leaflet/src/Leaflet');
    console.log("or here?");
    L.Index = require('./../index').Index;
}

// Test function call
describe('compute', function() {
  it('should be ok', function(done) {
     assert.equal(2, L.Index.compute());
     done();
  });
});