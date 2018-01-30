describe("IsDisplayed", function () {
    browser.ignoreSynchronization = true;
    it("Test in chrome", function(){        
        browser.get("http://www.bbc.com/");        
        element(by.css("#orb-nav-links > ul > li.orb-nav-homedotcom.orb-w"))
                        .isDisplayed().then(function(result){
            if(result){
                element(by.id("orb-search-q")).sendKeys("Hello");                
            }else{
                console.log("Element not displayed!");
            }
        });
    });  
});