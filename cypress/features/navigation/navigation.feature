Feature: Navigate some pages on app
  I want to navigate some pages on app

  Scenario: Navigate some pages on app
    Given I navigate app
    When Go back or forward in the browser history
    Then I reload the page
    Then I visit a remote url