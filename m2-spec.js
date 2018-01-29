describe("Multiton chrome", function () {
    it("Test chrome", function(){
        browser.ignoreSynchronization = true;
        browser.get("http://www.autopiter.ru/");        
        element(by.css('#SearchNumber')).sendKeys("Hello");
        browser.sleep(5000);
        // browser.manage().window().maximize();
        // element(by.css("#orb-nav-links > ul > li:nth-child(1)")).click();
        // browser.sleep(5000);
        //element(by.css('#orb-search-q')).sendKeys('Julie');
    });          
});