describe("Ispresent", function () {
    
    browser.ignoreSynchronization = true;
    it("Test", function () {
        browser.get("http://www.bbc.com/");
        console.log("aaaaa");
        delay(1, 20, "11bbccom_interstitial_ad");       

        
        function delay(start, end, locator) {            
          var flag = element(by.id(locator)).isPresent().then(function(findElement){
                if(findElement == true && start < end){
                    console.log("Present is ...")
                    return true;
                }else if(findElement == true && start < end){
                    console.log("1");
                    setTimeout(function () {
                        delay(start + 1 ,end, locator);
                    }, 1000);
                }else if(findElement!= true && start >= end){
                    throw new Error("Time is over!");
                }else if(findElement == true && start >= end){
                    throw new Error("Time is over if element is present")
                }else if(findElement!= true && start < end){
                    console.log("aaaaaaaaaaaa");
                    setInterval(function () {
                        delay(start + 1, end, locator);
                    }, 1000);
                    console.log("bbbbbbbbbbbbbb");
                }
            });
            
        }
    });
 
});




// browser.driver.findElement(By.id(elem)).then(null, function (err) {
            //     if (err.name === "NoSuchElementError") {
            //         isPresent = true;
            //         console.log("Element was missing!");
            //     }
            // });

            // if (end == 1 || !isPresent) {
            //     isPresent = false;
            //     console.log("end")
            //     return 0;
            // } else {
            //     setTimeout(function () {
            //         delay(start + 1, end - 1, locator);
            //     }, 1000);
            // }