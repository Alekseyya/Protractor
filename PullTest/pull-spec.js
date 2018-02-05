const lib = require('./lib');

describe("PullTest", function () {
    browser.ignoreSynchronization = true;
    // it("Validate user name", function () { 
    //     browser.get("http://www.yandex.ru/");
        
    //     lib.SetLogin("AutotestUser");
    //     lib.SetPassword("AutotestUser123");
    //     lib.SingUp();
    //     expect(lib.ReturnUserName()).toEqual("AutotestUser");
        
    // });
    // it("Check exit for yandex", function(){
    //     browser.get("http://www.yandex.ru/");        
    //     lib.SetLogin("AutotestUser");
    //     lib.SetPassword("AutotestUser123");
    //     lib.SingUp();
    //     lib.Logout();
    //     expect(lib.isExitUser()).toBe(true);

    // });
    // it("Incorrect password", function(){
    //     browser.get("http://www.yandex.ru/");        
    //      lib.SetLogin("AutotestUser");
    //      lib.SetPassword("NoAutotestUser123");
    //      lib.SingUp();
    //      expect(lib.GetMesageValidPassword()).toBe(true);
    // });
    // it("Incorrect password", function(){
    //     browser.get("http://www.yandex.ru/");        
    //      lib.SetLogin("NoAutotestUser");
    //      lib.SetPassword("AutotestUser123");
    //      lib.SingUp();
    //      expect(lib.GetMessageValidLogin()).toBe(true);
    // });
});