const lib = require('./lib');

describe("PullTest", function () {
    browser.ignoreSynchronization = true;
    it("First Test", function () { 
        browser.get("http://www.yandex.ru/");
        


        lib.SetLogin(login, xpathLoginLocator);
        lib.SetPassword(password, xpathPasswordLocator);

        browser.sleep(5000);


    });
});