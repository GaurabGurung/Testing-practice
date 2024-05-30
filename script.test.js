const googleSearch = require("./script");

dbMock = ["god.com", "dog.com", "cheesepuff.com", "dogpictures.com"];

it("this is a test", () => {
  googleSearch("cat", dbMock);
});
