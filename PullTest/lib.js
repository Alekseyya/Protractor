

function SetLogin(login, xpathLocator){
    let input = element(by.xpath(xpathLocator));
    input.sendKeys(login);
}

function SetPassword(pass, xpathLocator){
    let input = element(by.xpath(xpathLocator));
    input.sendKeys(pass);
}

module.exports = {
    SetLogin : SetLogin,
    SetPassword : SetPassword
}