
describe("IsDisplayed", function () {
    browser.ignoreSynchronization = true;
    it("Test isDisplayed", function () {
        browser.get("http://www.bbc.com/");

        var timeLimit = 30000;
        var checkPeriod = 1000;
        var locator = "#bbccosdfm_interstitial_ad";
    
        let beginTime = new Date().getTime();
        let checker = () => {
            var duration = new Date().getTime() - beginTime; 
            if (duration > timeLimit) {
                console.log("Exit from check cycle");
                clearInterval(timer);            
            }

            checkDisplayed(locator);
        };

        setTimeout(checker, checkPeriod);

        function checkDisplayed(locator) {
            element(by.css(locator)).isDisplayed().then(function (isVisible) {
                console.log("Check by timer ...");
                if (isVisible == true) {
                    // clearInterval(timer);
                    console.log("Element is found");
                } else {
                    setTimeout(checker, checkPeriod);
                }                
            }).catch(function (err) {
                setTimeout(checker, checkPeriod);
                console.log("Error in timer ...");
            });
        }

    });

});