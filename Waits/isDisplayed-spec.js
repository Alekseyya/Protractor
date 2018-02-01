
describe("IsDisplayed", function () {
    browser.ignoreSynchronization = true;    
    it("Test isDisplayed", function(){
        browser.get("http://www.bbc.com/"); 

        var timeLimit = 30;        
        var locator = "11orb-search-form";

        var isVisibleflag = false;        
        var endTimeout = false;
        var startTime = 0;
        
        Displayed(locator);
        Timer(); 

        function Displayed(locator){
            element(by.id(locator)).isDisplayed().then(function(elem){
                if(elem == true && !endTimeout){
                    isVisibleflag = true;                    
                }else if(elem == false && !endTimeout){
                    setTimeout(()=>{}, 800);
                    Displayed(locator);
                }else if(elem == false && !endTimeout){                    
                    console.log("End timeout");
                }
            }).catch(function(){
                if(!endTimeout){
                    setTimeout(()=>{},1000);
                    Displayed(locator);
                }else{
                    throw new Error("EndTimer is true");
                }
            });
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
                    throw new Error("Time is over");
                    //browser.sleep(100);
                }, 30000);
            }            
        }    
        
    });

});