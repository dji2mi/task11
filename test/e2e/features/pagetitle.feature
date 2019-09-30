@all
Feature: page title

  @zm
  Scenario: Page title should match
    Given I open "https://www.apc.com/shop/us/en/categories" url
    When I click on "Category"
    Then Then Page title should be "Power - APC USA"
