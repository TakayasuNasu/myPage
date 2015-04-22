
describe('FootballDataのテスト', function () {
  beforeEach(module('i-nasu'));

  var httpBackend;
  beforeEach(inject(function ($httpBackend) {
    httpBackend = $httpBackend;
  }));

  it('写真のpathを取得するテスト', inject(function(FlickrPhotos, Const) {
    httpBackend.expectJSONP(Const.baseApiUrlFlickr + 'services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK').respond(200, {});

    FlickrPhotos.load();
    httpBackend.flush();
  }));

});
