"use strict";
const { When } = require('cucumber');
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const logger = require('../../config/loggerConfig.js').logger;

When(/^I click "([^"]*)"$/, (param) => {
    logger.info(`I click ${param}`);
    return elementHelper(param).click();
});