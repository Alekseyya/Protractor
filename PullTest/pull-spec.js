const lib = require('./lib');

describe("PullTest", function () {
    browser.ignoreSynchronization = true;
    // it("Validate user name", function () { 
    //     lib.GoToUrl("http://www.yandex.ru/");
    //     lib.SetLogin("AutotestUser");
    //     lib.SetPassword("AutotestUser123");
    //     lib.SingUp();
    //     expect(lib.ReturnUserName()).toEqual("AutotestUser");
        
    // });
    // it("Check exit for yandex", function(){
    //     lib.GoToUrl("http://www.yandex.ru/");        
    //     lib.SetLogin("AutotestUser");
    //     lib.SetPassword("AutotestUser123");
    //     lib.SingUp();
    //     lib.Logout();
    //     expect(lib.isExitUser()).toBe(true);

    // });
    // it("Incorrect password", function(){
    //     lib.GoToUrl("http://www.yandex.ru/");        
    //      lib.SetLogin("AutotestUser");
    //      lib.SetPassword("NoAutotestUser123");
    //      lib.SingUp();
    //      expect(lib.GetMesageValidPassword()).toBe(true);
    // });
    // it("Incorrect password", function(){
    //     lib.GoToUrl("http://www.yandex.ru/");        
    //      lib.SetLogin("NoAutotestUser");
    //      lib.SetPassword("AutotestUser123");
    //      lib.SingUp();
    //      expect(lib.GetMessageValidLogin()).toBe(true);
    // });
    // it("Test navigation", function(){
    //     lib.GoToUrl("http://www.yandex.ru/");
    //     let yandexVideoUrl = lib.VisitToYandexVideo();
    //     let yandexImagesUrl = lib.VisitToYandexImages();
    //     let yandexNewsUrl = lib.VisitToYandexNews();
    //     let yandexMapsUrl = lib.VisitToYandexMaps();
    //     let yandexMarketUrl = lib.VisitToYandexMarket();
    //     let yandexTranslateUrl = lib.VisitToYandexTranslate();
    //     let yandexMusicUrl = lib.VisitToYandexMusic();

    //     Promise.all([
    //         expect(yandexVideoUrl).toContain('video'),
    //         expect(yandexImagesUrl).toContain('images'),
    //         expect(yandexNewsUrl).toContain('news'),
    //         expect(yandexMapsUrl).toContain('maps'),
    //         expect(yandexTranslateUrl).toContain('translate'),
    //         expect(yandexMusicUrl).toContain('music')
    //     ]).catch(function() {
    //         done.fail('some how the Url is incorrect');
    //     });
    // });
    // it("Test english version", function(){
    //     lib.GoToUrl("http://www.yandex.ru/");
    //     lib.ClickOnPopupLanguage();
    //     lib.SelectLanguage();
    //     lib.SaveLanguageSettings();
    //     expect(lib.InEnglishPage()).toBe(true);
    // });

});