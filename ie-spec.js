describe("Multition chrome", function () {
    it("Test chrome", function(){
        browser.ignoreSynchronization = true;
        browser.get("http://www.bbc.com/");        
        element(by.css('#orb-search-q')).sendKeys("Hello");
        browser.sleep(5000);
        browser.manage().window().maximize();
        element(by.css("#orb-nav-links > ul > li:nth-child(1)")).click();
        browser.sleep(5000);
        //element(by.css('#orb-search-q')).sendKeys('Julie');
    });           
});