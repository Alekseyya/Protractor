describe('Я тестирую баклажаны', function() {
    it('я бросаю их на землю', function() {
      browser.get('http://www.autopiter.ru');

    //element(by.xpath('//input[@id="SearchNumber"]')).sendKeys('write first protractor test');
      let findElement = driver.findElement(By.xpath('//input[@id="SearchNumber"]'));
      findElement.sendKeys("asdasd");
    
    // var todoList = element.all(by.repeater('todo in todoList.todos'));
    // expect(todoList.count()).toEqual(3);
    // expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // // You wrote your first test, cross it off the list
    // todoList.get(2).element(by.css('input')).click();
    // var completedAmount = element.all(by.css('.done-true'));
    // expect(completedAmount.count()).toEqual(2);
      
    });
  });