
describe("IsDisplayed", function () {
    browser.ignoreSynchronization = true;    
    it("Test isDisplayed", function(){
        browser.get("http://www.bbc.com/");       
        var timeLimit = 30;
        
        var locator = "111bbccom_interstitial_ad";

        var isVisibleflag = false;        
        var endTimeout = false;
        var startTime = 0;
        
        Displayed(locator);
        Timer(); 

        function Displayed(locator){
            element(by.id(locator)).isDisplayed().then(function(elem){
                if(elem == true && startTime < timeLimit){
                    isVisibleflag = true;
                    console.log("Element isVisible");
                }else if(elem == false && !endTimeout){
                    Displayed(locator);                                   
                    console.log("IsHidden flag true");
                }else if(elem == false && !endTimeout){                    
                    console.log("End timeout");
                }
            }).catch(function(){
                if(!endTimeout){
                    Displayed(locator);
                }else{
                    console.log("Catch exception");
                }               
                
            });
            
            // await function () {
            //     if (IsHiddenflag && !endTimeout) {
            //         Displayed(locator);
            //     }
            // } 
            
        }

        function Timer() {
            let tick = setInterval(function(){
                if(isVisibleflag){
                    clearInterval(tick);
                }
                startTime++;
            }, 1000);
            if(!isVisibleflag){
                setTimeout(function(){ 
                    clearInterval(tick);
                    endTimeout = true;
                    console.log(startTime);
                    console.log("!!!!!!!!!!!!!");
                    //browser.sleep(100);
                }, 30000);
            }
            
        }    
        
    });

});