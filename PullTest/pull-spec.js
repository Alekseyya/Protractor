const lib = require('./lib');

describe("PullTest", function () {
    browser.ignoreSynchronization = true;
    it("First Test", function () { 
        browser.get("http://www.yandex.ru/");
        let xpathLoginLocator = "//div[@class='domik3__dropdown-row']/descendant::input)[1]";
        let xpathPasswordLocator = "//div[@class='domik3__dropdown-row']/descendant::input)[2]";
        let login = "AutotestUser";
        let password = "AutotestUser123";


        lib.SetLogin(login, xpathLoginLocator);
        lib.SetPassword(password, xpathPasswordLocator);

        browser.sleep(5000);


    });
});