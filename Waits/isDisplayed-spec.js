describe("IsDisplayed", function () {
    browser.ignoreSynchronization = true;
    it("Test", function () {
        browser.get("http://www.bbc.com/");

        var startTime = 0;
        var endTime = 20;
        var locator = "111bbccom_interstitial_ad";
        delay(startTime, endTime, locator);         
        
        function onDisplayed(){
            console.log("onDiplayed");
        }

        function onHidden(){
            console.log("onHidden");
        }
        

        function delay(start, end, locator) {            
           element(by.id(locator)).isPresent().then(function(findElement){
                if(findElement == true && start < end){
                    console.log("Present is ...")                    
                    element(by.id(locator)).isDisplayed().then(function(isVisible){
                            if(isVisible){
                                onDisplayed();
                            }else{
                                onHidden(); 
                            }
                        });
                }else if(findElement == true && start < end){
                    setTimeout(function () { }, 1000);
                    delay(start + 1 ,end, locator);
                }else if(findElement!= true && start >= end){
                    element(by.id(locator)).isDisplayed().then()
                    .catch(
                    function (NoSuchElementError) {
                        throw new Error("No Such Element Error and Time is over!");                        
                    });
                                      
                }else if(findElement == true && start >= end){
                    // element(by.id(locator)).isDisplayed().then()
                    // .catch(
                    // function (NoSuchElementError) {
                    //     throw new Error("No Such Element Error");
                        
                    // }); 
                    throw new Error("Time is over if element is present");                                       
                }
                //if element not exist
                else if (findElement != true && start < end) {
                    setTimeout(function(){}, 1000);
                    delay(start + 1, end, locator);
                }
            })                  
        }

    }); 
});