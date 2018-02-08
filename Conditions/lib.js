let EC = protractor.ExpectedConditions;
function GoToUrl(site){
    browser.get(site);
}
function Click(){
    let videoLocator = "div.home-arrow__tabs > div > a:first-child";
    browser.actions().mouseMove(element(by.css(videoLocator))).perform();
    browser.actions().click(protractor.Button.LEFT).perform();    
}

function Scroll(){    
    browser.executeScript('window.scrollTo(0,5000);');
    let coursesVuejs = ".course-list__list > div:last-child > a:nth-child(2)";
    browser.actions().mouseMove(element(by.css(coursesVuejs))).perform();
    browser.actions().click(protractor.Button.LEFT).perform();
    //browser.sleep(5000);
}

function EnterValue(){
    let yandexSearchInput = "#text";
    browser.actions().mouseMove(element(by.css(yandexSearchInput)))
        .sendKeys("AAAA")
        .perform();   
    browser.sleep(5000);
}

function EnterTextInSearch(text){ 
    let yandexSearchInput = "#text";
    let clickSearchButton = "div.search2__button > button > span.button__text";
    let navigationRegion = "div.navigation__region";
    browser.actions().mouseMove(element(by.css(yandexSearchInput)))
        .sendKeys("Hello")
        .perform();
    browser.actions().mouseMove(element(by.css(clickSearchButton)))
        .click(protractor.Button.LEFT)
        .perform();
    browser.wait(EC.visibilityOf(
        element(by.css(navigationRegion))
    ), 5000, "Navigation is not found");


    let noCorreactVideoLink = "div.service_name_video >a11";    

    browser.wait(EC.presenceOf(
        element(by.css(noCorreactVideoLink))
    ), 5000, "Don't element in DOM");
}

function IsTextInElement(text){
    let link = "div.home-arrow__tabs a:first-child";    
    browser.wait(EC.textToBePresentInElement(
        element(by.css(link)), text),
     5000, "Not finded text");
     
}

module.exports = {
    GoToUrl : GoToUrl,
    Click : Click,
    Scroll : Scroll,
    EnterValue : EnterValue,
    EnterTextInSearch : EnterTextInSearch,
    IsTextInElement : IsTextInElement
}