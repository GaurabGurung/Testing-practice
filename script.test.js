const googleSearch = require("./script");

dbMock = ["god.com", "dog.com", "cheesepuff.com", "dogpictures.com"];

describe("googleSearch", () => {
  it("it is a silly test", () => {
    // googleSearch("cat", dbMock);
    expect("hello").toBe("hello");
  });

  it("is searching google", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
  });

  it("working with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
