
describe("IsEnabled", function () {
    browser.ignoreSynchronization = true;    
    it("Test isEnabled", function(){
        browser.get("http://www.bbc.com/"); 

        var timeLimit = 30;        
        var locator = "orb-search-form";
        var isEnabledflag = false;        
        var endTimeout = false;
        var startTime = 0;
        GetEnabled(locator);
        Timer();

        async function GetEnabled(locator){
            try {
                await element(by.id(locator)).isEnabled()
               .then((elem)=>{
                   if(elem == true && !endTimeout){
                       isEnabledflag = true;
                   }else if(elem == false && !endTimeout){
                       setTimeout(() => {}, 1000);
                       GetEnabled(locator);
                   }else if(elem == false && !endTimeout){ //Необязательное условие
                       console.log("End timeout!")
                   }  
               });
            } catch (error) {
                if(!endTimeout){
                    setTimeout(()=>{}, 1000);                   
                    GetEnabled(locator);                
                }else{
                    throw new Error("EndTimer is true");
                };    
            }
            
               
        }

        function Timer() {
            let tick = setInterval(function(){
                if(isEnabledflag){
                    clearInterval(tick);
                }
                startTime++;
            }, 1000);
            if(!isEnabledflag){
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