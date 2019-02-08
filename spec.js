describe('Protractor Demo App', function () {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    beforeEach(function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });


    it('should have a title', function () {
        //browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function () {
        //browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);

        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).
            //toEqual('5'); // This is wrong!
            toEqual('3'); // This is right!
    });

    it('should add four and six', function() {
        element(by.model('first')).sendKeys(4);
        element(by.model('second')).sendKeys(6);

        element(by.id('gobutton')).click();

        expect(latestResult.getText()).toEqual('10');
      });
    
      it('should read the value from an input', function() {
        firstNumber.sendKeys(1);
        expect(firstNumber.getAttribute('value')).toEqual('1');
      });
});
