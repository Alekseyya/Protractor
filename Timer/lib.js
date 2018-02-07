
function GetVideo(){
    let yandexPictureLocator = "//1111div[@class = 'home-arrow__tabs']/descendant::a[2]"
    TestElement(yandexPictureLocator, 10000);
    //element(by.xpath(yandexPictureLocator)).click();     
}


var timeLimit = 30000;
var checkPeriod = 1000;
var xpathLocator = "#bbccosdfm_interstitial_ad";

let beginTime = new Date().getTime();
let checker = () => {
    var duration = new Date().getTime() - beginTime; 
    if (duration > timeLimit) {
        //return Promise.reject(false);
        console.log("Exit from check cycle");        
        //clearInterval(timer);            
    }
    checkDisplayed(xpathLocator);
    //return Promise.resolve(true);    
};

function checkDisplayed(xpathLocator) {
    element(by.xpath(xpathLocator)).isDisplayed().then(function (isVisible) {        
        if (isVisible == true) {
            // clearInterval(timer);
            console.log("Element is found");
        } else {
            setTimeout(checker, checkPeriod);
        }                
    }).catch(function (err) {
        console.log("Error in timer ...");
        setTimeout(checker, checkPeriod);        
    });
    //return Promise.resolve(true);
}


function TestElement(xLocator, tLimit){
    timeLimit = tLimit;
    xpathLocator = xLocator;
    let result = checker();
    //console.log(result);
}


module.exports = {
    GetVideo : GetVideo
};