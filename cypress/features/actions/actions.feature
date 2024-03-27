Feature: Action with elements in actions page

  Scenario: Action with elements in actions page
    Given I navigate to actions page
    When type into a DOM element
    Then focus on a DOM element
    Then blur off a DOM element
    Then clears an input or textarea element
    Then submit a form
    Then check a checkbox or radio element
    Then uncheck a checkbox element
    Then select an option in a <select> element