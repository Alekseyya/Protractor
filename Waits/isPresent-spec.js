describe("Ispresent", function () {
    browser.ignoreSynchronization = true;


    it("Test", function () {
        browser.get("http://www.bbc.com/");




        delay(20);
        var flag = false;

        function delay(end) {
           
                browser.driver.findElement(By.id("11bbccom_interstitial_ad")).then(null, function (err) {
                    if (err.name === "NoSuchElementError") {
                        flag = true;
                        console.log("Element was missing!");
                    }
                });
           
            

            if (end == 1 || !flag) {
                console.log("end")
                return 0;
            } else {
                setTimeout(function () {
                    delay(end - 1);
                }, 1000);
            }
        }

      


        // function delay(end, flag) { 

        //     (async function(){
        //         await browser.driver.findElement(By.id("11bbccom_interstitial_ad")).then(null, function (err) {                
        //             if (err.name === "NoSuchElementError") {
        //                 console.log("Element was missing!");
        //               flag = true;                    
        //             }
        //         });
        //     })()
            
            
        //     if (end == 1 && flag) {
        //         console.log("end")
        //         return 0;
        //     } else {
        //        setTimeout(function () { 
        //             delay(end - 1, flag);
                    
        //         }, 1000);
        //     }
        // }

        // delay(10, false);
    });

































    // it("Test in firefox", function () {
    //     browser.get("http://www.bbc.com/");
    //     element(by.id("bbccom_interstitial_ad")).isPresent().then(function (result) {
    //         if (result) {
    //             element(by.id("orb-search-q")).sendKeys("Hello");
    //             browser.sleep(15000);
    //         } else {
    //             console.log("Not present");
    //         }
    //     });
    // });
    
    // it("isPresent", function () {        
    //     browser.get("http://www.bbc.com/");  
    //     browser.wait(function(){
    //         return element(by.id("bbccom_interstitial_ad")).isPresent();
    //     }, 3000, 'Element not exist!');        
    // });    

    // it("IsPresent", function(){
    //     browser.manage().window().maximize();        
    //     browser.get("http://www.bbc.com/");
    //     element(by.css("#orb-search-q")).sendKeys("Hello"); 
    //     browser.wait(function() {
    //         return element(by.css('#episode-0')).isPresent().then(function(isPresent) {
    //           return !isPresent;
    //         });

    //       }, 1000);
    // });

    // it("isPresent example 3", function () { //но он не работает, непонятно почему
    //     browser.manage().window().maximize();
    //     browser.get("http://www.bbc.com/");
    //     element(by.css("#orb-search-q")).sendKeys("Hello");
    //     expect(element(by.css("#episode-0")).waitReady()).toBeTruthy();
    // });    
});