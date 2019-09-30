"use strict";
let {Then, When, Given} = require('cucumber');
const expect = require('chai').expect;
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const stepFunctions = require('../utils/stepFunctions.js');
const logger = require('../../config/loggerConfig.js').logger;

Then(/^"([^"]*)" should( not)? be visible$/, async (alias, notArg) => {
    notArg = notArg ? ' not' : '';
    logger.info(`${alias} should${notArg} be visible`);
    let element = elementHelper(alias);
    let result = await element.isPresent();
    return expect(result).to.be.equal(!notArg);
});



Then(/^Text of "([^"]*)" should( not)? contain "([^"]*)"$/, async (param, notArg, textToContain) => {
    notArg = notArg ? ' not' : '';
    let element = elementHelper(param);
    let elementText = await element.getText();
    logger.info(`Text of ${param} should${notArg} contain ${textToContain}`);
    return expect(elementText.indexOf(textToContain)).to.not.equal(-1);    
});


Then(/^Page title should( not)? be "([^"]*)"$/, async (notArg, text) => {
    notArg = notArg ? ' not' : '';
    let pageTitle = await browser.getTitle();
    logger.info(`Page title should${notArg} be ${text}`);
    if (notArg){
        return expect(pageTitle).to.not.equal(text);
    }
    else {
        return expect(pageTitle).to.be.equal(text);
    }  
});