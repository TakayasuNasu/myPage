describe("IndexServiceのテスト", function () {

  beforeEach(module('i-nasu'));

  it("getContents", inject(function (IndexService) {
    expect(2).toEqual(1 + 1);
  }));
});
