
describe("sampleApp module", function() {

  var sampleApp;
  sampleApp = null;
  beforeEach(function() {
    sampleApp = angular.module('i-nasu');
  });

  it('存在すること', function() {
    expect(sampleApp).not.toBeNull();
  });

  it('依存moduleの確認', function() {
    expect(sampleApp.requires).toContain('ngResource');
    expect(sampleApp.requires).toContain('ui.router');
    expect(sampleApp.requires).toContain('lumx');
    expect(sampleApp.requires).toContain('angular-table');
    expect(sampleApp.requires).toContain('zumba.angular-waypoints');
    expect(sampleApp.requires).toContain('duScroll');
  });

});
