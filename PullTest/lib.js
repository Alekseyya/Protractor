function GoToUrl(url){
    browser.get(url);
}

function SetLogin(login){
    browser.sleep(1000);
    let xpathLoginLocator = "(//div[@class='domik3__dropdown-row']/descendant::input)[1]";
    TestElement(xpathLoginLocator, 2000);       
    let input = element(by.xpath(xpathLoginLocator));
    input.sendKeys(login);
}

function SetPassword(pass){
    let xpathPasswordLocator = "(//div[@class='domik3__dropdown-row']/descendant::input)[2]";
    TestElement(xpathPasswordLocator, 10000);      
    let input = element(by.xpath(xpathPasswordLocator));
    input.sendKeys(pass);
}

function DeleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function VisitToYandexVideo(){    
    let yandexVideoLocator = "//div[@class = 'home-arrow__tabs']/descendant::a[1]"
    TestElement(yandexVideoLocator, 10000);
    element(by.xpath(yandexVideoLocator)).click();
    let url =  browser.getCurrentUrl(); 
    browser.get("http://www.yandex.ru/");  
    return url;
}

function VisitToYandexImages(){
    let yandexPictureLocator = "//div[@class = 'home-arrow__tabs']/descendant::a[2]"
    TestElement(yandexPictureLocator, 10000);
    element(by.xpath(yandexPictureLocator)).click();
    let url =  browser.getCurrentUrl(); 
    browser.get("http://www.yandex.ru/");  
    return url;
}

function VisitToYandexNews(){
    let yandexNewsLocator = "//div[@class = 'home-arrow__tabs']/descendant::a[3]"
    TestElement(yandexNewsLocator, 10000);
    element(by.xpath(yandexNewsLocator)).click();
    let url =  browser.getCurrentUrl(); 
    browser.get("http://www.yandex.ru/");  
    return url;
}


function VisitToYandexMaps(){
    let yandexMapsLocator = "//div[@class = 'home-arrow__tabs']/descendant::a[4]"
    TestElement(yandexMapsLocator, 10000);
    element(by.xpath(yandexMapsLocator)).click();
    let url =  browser.getCurrentUrl(); 
    browser.get("http://www.yandex.ru/");  
    return url;
}

function VisitToYandexMarket(){
    let yandexMarketLocator = "//div[@class = 'home-arrow__tabs']/descendant::a[5]"
    TestElement(yandexMarketLocator, 10000);
    element(by.xpath(yandexMarketLocator)).click();
    let url =  browser.getCurrentUrl(); 
    browser.get("http://www.yandex.ru/");  
    return url;
}

function VisitToYandexTranslate(){
    let yandexTranslateLocator = "//div[@class = 'home-arrow__tabs']/descendant::a[6]"
    TestElement(yandexTranslateLocator, 10000);
    element(by.xpath(yandexTranslateLocator)).click();
    let url =  browser.getCurrentUrl(); 
    browser.get("http://www.yandex.ru/");  
    return url;
}

function VisitToYandexMusic(){
    let yandexMusicLocator = "//div[@class = 'home-arrow__tabs']/descendant::a[7]"
    TestElement(yandexMusicLocator, 10000);
    element(by.xpath(yandexMusicLocator)).click();
    let url =  browser.getCurrentUrl(); 
    browser.get("http://www.yandex.ru/");  
    return url;
}

function ClickOnPopupLanguage(){
    let optionsLink = "//div[contains(@class, 'dropdown-menu')]/a[1]";    
    TestElement(optionsLink, 10000);
    element(by.xpath(optionsLink)).click();
    let popupDiv = "//i[@class = 'popup__tail']/ancestor::div/div[@class='popup__under']";
    let settingsPortal = "//div[contains(@class, 'popup_visibility_visible') and contains(@class, 'popup_to_bottom')]//div[@role ='menuitem'][last()]/a";    
    TestElement(popupDiv, 10000);
    TestElement(settingsPortal, 10000);
    element(by.xpath(settingsPortal)).click();
    browser.sleep(1000);
    let languageButton = "//div[@class='line line_type_content']//a[3]";
    element(by.xpath(languageButton)).click();
    browser.sleep(1000);
    let selectButton = "//button[contains(@class, 'select__button')]";
    TestElement(selectButton, 10000);
    element(by.xpath(selectButton)).click();
    
}

async function SelectLanguage(){
    let listLanguagesLocator = "//div[@class='select__list']/div/span";
    let listLanguages = await element.all(by.xpath(listLanguagesLocator))
                                    .map((tag)=>{
                                        return tag.getText();
                                    });
    let indexTextEnglish = listLanguages.indexOf("English") + 1;                              
    let selectedEnglishLocator = "(//div[@class='select__list']/div/descendant::span)" 
                                        + "[" + indexTextEnglish +"]";
    TestElement(selectedEnglishLocator, 10000);
    element(by.xpath(selectedEnglishLocator)).click();
    browser.sleep(1000);
}

async function InEnglishPage(){
    browser.sleep(1000);    
    let yandexVideoLocator = "//div[@class = 'home-arrow__tabs']/descendant::a[1]";
    //TestElement(yandexVideoLocator, 15000);
    let textVideo = await element(by.xpath(yandexVideoLocator)).getText();    
    var regexEnglishWord = new RegExp("[a-zA-Z]{5}");
    if(regexEnglishWord.test(textVideo)){
        return true;
    }
    return false;
}

function SaveLanguageSettings(){
    let buttonSaveCurrentLanguage = "//button[contains(@class, 'form__save')]";
    TestElement(buttonSaveCurrentLanguage, 10000);
    element(by.xpath(buttonSaveCurrentLanguage)).click();
}

function SingUp(){
    let buttonLocator = "//button[contains(@class, 'auth__button')]";    
    TestElement(buttonLocator, 10000);
    element(by.xpath(buttonLocator)).click();
    browser.sleep(3000);  
}

async function GetMesageValidPassword(){
    let validateMessage = "//div[contains(@class,'passport-Domik-Form-Error')]";
    TestElement(validateMessage, 10000);
    let message = await element(by.xpath(validateMessage)).getText();    
    if(message === "Неверный пароль"){
        return true;
    }
    return false;
}

async function GetMessageValidLogin(){
    let validateMessage = "//div[contains(@class,'passport-Domik-Form-Error')]";
    TestElement(validateMessage, 10000);
    let message = await element(by.xpath(validateMessage)).getText();
    console.log(message);
    if(message === "Такого аккаунта нет" || message === "Введите символы с картинки"){
        return true;
    }
    return false;
}

async function ReturnUserName(){
    let userNameLocator = "//div[@class ='mail-User-Name']";
    TestElement(userNameLocator, 15000);
    let userName = await element(by.xpath(userNameLocator)).getText();
    Logout();              
    return userName;
}

function Logout(){
    let userButtonLocator = "//div[@class ='mail-User-Name']";
    let popupLocator = "//div[contains(@class,'b-user-dropdown-content')]";
    let exitLocator = "//div[@class='b-mail-dropdown__item'][last()]/a";
    let userLogined = "//span[@class='username__first-letter']";
    
    TestElement(userButtonLocator, 10000);
    element(by.xpath(userButtonLocator)).click();
    
    TestElement(popupLocator, 15000);
    browser.sleep(2000);
    element(by.xpath(exitLocator)).click();
    //browser.sleep(5000);
}

async function isExitUser(){
    TestElement(userLogined, 10000);
    try {
       await element(by.xpath(userLogined)).isDisplayed();
    } catch (error) {
        return true;
    }
    return false;  
}

function TestElement(xLocator, tLimit){
    timeLimit = tLimit;
    xpathLocator = xLocator;
    setTimeout(checker, checkPeriod);
}

var timeLimit = 30000;
var checkPeriod = 500;
var xpathLocator = "#bbccosdfm_interstitial_ad";

let beginTime = new Date().getTime();
let checker = () => {
    var duration = new Date().getTime() - beginTime; 
    if (duration > timeLimit) {
        console.log("Exit from check cycle");        
        //clearInterval(timer);            
    }
    checkDisplayed(xpathLocator);
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
        setTimeout(checker, checkPeriod);
        //console.log("Error in timer ...");
    });
}

module.exports = {
    SetLogin: SetLogin,
    SetPassword: SetPassword,
    SingUp: SingUp,
    ReturnUserName: ReturnUserName,
    Logout: Logout,
    isExitUser: isExitUser,
    GetMesageValidPassword: GetMesageValidPassword,
    GetMessageValidLogin: GetMessageValidLogin,
    GoToUrl: GoToUrl,
    VisitToYandexVideo: VisitToYandexVideo,
    VisitToYandexImages: VisitToYandexImages,
    VisitToYandexNews: VisitToYandexNews,
    VisitToYandexMaps: VisitToYandexMaps,
    VisitToYandexMarket: VisitToYandexMarket,
    VisitToYandexTranslate: VisitToYandexTranslate,
    VisitToYandexMusic: VisitToYandexMusic,
    ClickOnPopupLanguage : ClickOnPopupLanguage,
    SelectLanguage : SelectLanguage,
    SaveLanguageSettings : SaveLanguageSettings,
    InEnglishPage : InEnglishPage,
    DeleteAllCookies : DeleteAllCookies
}