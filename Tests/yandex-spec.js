describe("IsEnabled", function () {
    browser.ignoreSynchronization = true;    
    it("Test isEnabled", function(){
        let EC = protractor.ExpectedConditions;

        let London = {
            listNameServices: [],
            listNameTabs: []
        }
        let Parish = {
            listNameServices: [],
            listNameTabs: []
        }
        browser.get("https://www.yandex.ru/");        
        
        GetData();

        async function GetData(){
           GetInfoForLondon();
           GetInfoForParish();
           console.log(London);
           console.log(Parish);
        }

        function GetInfoForLondon(){
            ClickOnCity();
            SetCity("London");
            let tmpObjLondon = GetListHomeLinks("London");
            London.listNameServices = tmpObjLondon.nameServices;
            London.listNameTabs = tmpObjLondon.nameTabs;            
        }

        function GetInfoForParish(){
            ClickOnCity();
            SetCity("Paris");
            let tmpObjParish = GetListHomeLinks("Paris");
            Parish.listNameServices = tmpObjParish.nameServices;
            Parish.listNameTabs = tmpObjParish.nameTabs;            
        }
                

        async function GetListHomeLinks(city) {

            let dropdown = element(by.css("div.home-arrow__tabs > div:first-child > a:last-child"));
            browser.wait(EC.visibilityOf(
                dropdown
            ), 10000, "Don't see dropdown")
            dropdown.click();

            browser.wait(EC.visibilityOf(
                element(by.css("div.popup__content > div.home-tabs__more"))
            ), 10000, "List words for" + city + " is not exist");

           
            let object = {
                nameServices : [],
                nameTabs :  []
            } 
             
            let listNameServices = await element.all(by.css("div.home-tabs__more-top > div > a"))
                .map((word) => {
                    return word.getText();
                });

            let listNameTabs = await element.all(by.css("div.home-tabs__more-bottom > div > a")).map((word) => {
                return word.getText();
            });

            object.nameServices = listNameServices;
            object.nameTabs = listNameTabs;  
            return object;
        }

        function ClickOnCity(){
            element(by.css(".geolink__reg")).click();
            browser.wait(EC.visibilityOf(
                element(by.css("#city__front-input"))
            ), 5000, "Elemnt not found");
        }

        async function SetCity(city) {
            await element(by.css("#city__front-input")).clear()
                .sendKeys(city);
            
            await browser.wait(EC.visibilityOf(
                element(by.css("div.popup_visibility_visible"))
            ),5000).then((result)=>{
                if(result){
                   element(by.css("ul.input__popup-items.popup__items > li:first-child")).click();
                }else{
                    console.log("Error");
                }
            });        

        }
        
    });

});