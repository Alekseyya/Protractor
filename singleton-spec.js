describe("Tests several browsers", function () {
    browser.ignoreSynchronization = true;
    it("Test firefox", function(){        
        browser.get("http://www.yandex.com/");        
        // element(by.css('#orb-search-q')).sendKeys("Hello");
        // browser.sleep(5000);
        // browser.manage().window().maximize();
        // element(by.css("#orb-nav-links > ul > li:nth-child(1)")).click();
        // browser.sleep(5000);
        //element(by.css('#orb-search-q')).sendKeys('Julie');
    });
    // it("Test firefox", function(){
    //     //browser.ignoreSynchronization = true;
    //     browser.get("https://www.yandex.ru/");        
    //     // element(by.css('#orb-search-q')).sendKeys("Hello");
    //     // browser.sleep(5000);
    //     // browser.manage().window().maximize();
    //     // element(by.css("#orb-nav-links > ul > li:nth-child(1)")).click();
    //     // browser.sleep(5000);
    //     // //element(by.css('#orb-search-q')).sendKeys('Julie');
    // });             
});