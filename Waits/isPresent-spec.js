describe("Ispresent", function () {
    browser.ignoreSynchronization = true;

    it("Test in firefox", function () {
        browser.get("http://www.bbc.com/");
        element(by.id("bbccom_interstitial_ad")).isPresent().then(function (result) {
            if (result) {
                element(by.id("orb-search-q")).sendKeys("Hello");
                browser.sleep(15000);
            } else {
                console.log("Not present");
            }
        });
    });
    
    it("isPresent", function () {        
        browser.get("http://www.bbc.com/");  
        browser.wait(function(){
            return element(by.id("bbccom_interstitial_ad")).isPresent();
        }, 3000, 'Element not exist!');        
    });    

    it("IsPresent", function(){
        browser.manage().window().maximize();        
        browser.get("http://www.bbc.com/");
        element(by.css("#orb-search-q")).sendKeys("Hello"); 
        browser.wait(function() {
            return element(by.css('#episode-0')).isPresent().then(function(isPresent) {
              return !isPresent;
            });
            
          }, 1000);
    });

    it("isPresent example 3", function () { //но он не работает, непонятно почему
        browser.manage().window().maximize();
        browser.get("http://www.bbc.com/");
        element(by.css("#orb-search-q")).sendKeys("Hello");
        expect(element(by.css("#episode-0")).waitReady()).toBeTruthy();
    });    
});