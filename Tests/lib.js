var timeLimit = 30000;
var isVisibleflag = false;        
var endTimeout = false;
let startTime = 0;

let listServicesOfLondon = [];
let listServiceOfParis = [];


function GoToPage(page){
    browser.get(page);
}

function SetCity(city){
    element(by.css(".geolink__reg")).click();
    SelectCityInList(city);
}

async function GetInfoForLondon(){
    let listServices = GetListServices("London");
    return listServices;
}

async function GetInfoForParis(){
    let listServices = await GetListServices("Paris");
    listServices.push("1111111111");    
    return listServices;
}


// function CompareServices(){
//     if(listServicesOfLondon.length == listServiceOfParis.length){
//         Array.prototype.diff = function(a) {
//             return this.filter(function(i) {return a.indexOf(i) < 0;});
//         };
//         let differenceResult = listServicesOfLondon.diff(listServicesOfLondon);
//         if(differenceResult.length == 0){
//             console.log("List services of london equal list services of paris");
//         }else{
//             console.log("Not equals, difference elements:" + differenceResult);
//         }
           
//     }else{
//         console.log("Number of services not match");
//     }            
// }


async function GetListServices(city) {
    TestElement("div.home-arrow__tabs > div:first-child > a:last-child", 15000);
    element(by.css("div.home-arrow__tabs > div:first-child > a:last-child")).click();

    let listServices = await element.all(by.xpath("//div[@class ='home-tabs__more']/descendant::a"))
        .map((tag) => {
            return tag.getText();
        });
    return listServices;
}

function SelectCityInList(city) {
    element(by.css("#city__front-input")).clear();
    element(by.css("#city__front-input")).sendKeys(city);            
    browser.sleep(1000);
    TestElement("div.popup_visibility_visible", 15000);
    element(by.css("ul.input__popup-items.popup__items > li:first-child")).click();
    browser.sleep(1000); 
}

function TestElement(cssLocator, timeLimitMilisecond){
    ResetFlags(timeLimitMilisecond);
    Timer();            
    Displayed(cssLocator);
    
}

function ResetFlags(timeLimitSeconds){
    timeLimit = timeLimitSeconds;
    isVisibleflag = false;
    endTimeout = false;
    startTime = 0;
}


function Displayed(locator) {
    element(by.css(locator)).isDisplayed().then(function (elem) {
        if (!endTimeout) {
            if (elem == true) {
                isVisibleflag = true;
            } else if (elem == false) {
                let d = Displayed
                setTimeout(() => { 
                    d(locator)
                }, 800);
            }
        }

    }).catch(function () {
        if (!endTimeout) {
            setTimeout(() => { }, 1000);
            Displayed(locator);
        } else {
            throw new Error("EndTimer is true");
        }
    });
}

function Timer() {            
    let tick = setInterval(function(){
        if(isVisibleflag){
            clearInterval(tick);
        }
        ++startTime;
    }, 1000);
    
    if(!isVisibleflag) {
        tick;
        setTimeout(function(){ 
            clearInterval(tick);
            endTimeout = true;                    
            throw new Error("Time is over");
            //browser.sleep(100);
        }, timeLimit);
    }            
}

module.exports = {
    GoToPage : GoToPage,
    SetCity : SetCity,
    GetInfoForLondon : GetInfoForLondon,
    GetInfoForParis : GetInfoForParis,    
    GetListServices : GetListServices
}