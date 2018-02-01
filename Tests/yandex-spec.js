describe("IsEnabled", function () {
    browser.ignoreSynchronization = true;    
    it("Test isEnabled", function(){
        browser.get("https://www.yandex.ru/")
        let spb = {
            listLinks: []
        }
        let parish = {
            listLinks: []
        }
        var EC = protractor.ExpectedConditions;
       
        element(by.css(".geolink__reg")).click();
        browser.wait(EC.visibilityOf(
            element(by.css("#city__front-input"))
        ), 10000, "Elemnt not found");
        element(by.css("#city__front-input")).clear()
                .sendKeys("Лондон");
        
        let firstInPopup = element(by.css("ul.input__popup-items.popup__items > li:first-child"));
        browser.wait(EC.visibilityOf(firstInPopup),5000, "Don't find London");
        firstInPopup.click();
        browser.sleep(5000);
        
        
        
    });

});