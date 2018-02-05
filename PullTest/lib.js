let xpathLoginLocator = "//div[@class='domik3__dropdown-row']/descendant::input)[1]";
let xpathPasswordLocator = "//div[@class='domik3__dropdown-row']/descendant::input)[2]";
let correctLogin = "AutotestUser";
let correctPassword = "AutotestUser123";

let incorrectLogin = "NoAutotestUser";
let incorrectPasword = "NoAutotestUser123";

function SetLogin(login, xpathLocator){
    let input = element(by.xpath(xpathLocator));
    input.sendKeys(login);
}

function SetPassword(pass, xpathLocator){
    let input = element(by.xpath(xpathLocator));
    input.sendKeys(pass);
}

function SingUp(){
    
}

module.exports = {
    SetLogin : SetLogin,
    SetPassword : SetPassword
}