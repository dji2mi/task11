const PaOb = require('../../pageobjects/pageobject.json');

    let getPageObjectElement = (param) => {
        let pageElement = PaOb[param];
        if (pageElement['isCollection'] === true) {
            pageElement = element.all(by.xpath(pageElement.selector));
            return pageElement;
        }
        else {
            pageElement = element(by.xpath(pageElement.selector));
            return pageElement;
        }
    };

    
    module.exports = {
        getPageObjectElement
        }